import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { RoleExitsError } from 'ClientApp/app/shared/errors/role-exist-error';
import { Role } from 'ClientApp/app/shared/models/role.model';
import { User } from 'ClientApp/app/shared/models/user.model';
import { AdminService } from 'ClientApp/app/shared/services/admin.service';
import { Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-add-delete-role',
  templateUrl: './user-add-delete-role.component.html',
  styleUrls: ['./user-add-delete-role.component.scss']
})
export class UserAddDeleteRoleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'delete'];  
  roleForm: FormGroup;

  user: User;
  userId: string;
  public dataSource;
  public progressBarMode = '';
  roleArray: Role[];
  filteredOptions: Observable<Role[]>;
  
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { 
    this.dataSource = new MatTableDataSource<Role>()
  }

  async ngOnInit() {
    this.roleForm = this.fb.group({
      roleId: [null, Validators.required],
    });

    this.userId = this.route.snapshot.paramMap.get('id');
    this.user = await this.adminService.getRolesOfUser(this.userId);
    this.dataSource.data  = this.user.roles;

    this.roleForm.controls['roleId'].valueChanges.pipe(
      startWith(''),
      switchMap(inputText => {    
            return this.getRoleListObservable(inputText || '');
       })
    ).subscribe((roleList: Role[]) => {     
      if(roleList.length > 0){ this.roleArray = roleList; }
      this.filteredOptions = of(roleList); 
    }); 
  }

  // AutoComplete Input
  getRoleListObservable(val: string) {
    return this.adminService.getAllRolesByQuery(val) as Observable<Role[]>;
  }  

    
  displayFn( roleArray: Role[]): (id: string) => string | null {
    return (id: string) => { 
      const correspondingOption = Array.isArray(roleArray) ? roleArray.find(option => option.id === id) : null;
      return correspondingOption ? (`${correspondingOption.name}`) : '';
    }
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Delete role from User
  async onDelete($event, roleToDelete: Role) {
    $event.stopPropagation();

    const dialogData = new DialogData('Confirm Action', 
    `Are you sure you want to delete the role ${roleToDelete.name} from this User ${this.user.firstName} ${this.user.lastName} (${this.user.email})`);
    const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });

    dialogRef.afterClosed().subscribe(async dialogResult => {
      if (dialogResult) {
        try {          
          await this.adminService.deleteRoleFromUser(this.user.id, roleToDelete.id);
          const index = this.dataSource.data.indexOf(roleToDelete);
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription();
        } catch (error) {
          this.snackBar.open('Something went wrong, Role was not deleted', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        }
      }});
  }

  async onSubmit() {
    
    // Validation //
    if (this.roleForm.invalid) { return; }

    let roleId = this.roleForm.controls['roleId'].value;

    let userPicked = this.roleArray?.find(u => u.id == roleId);
    if(!userPicked) {
      this.snackBar.open(`You have to pick a role`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      this.roleForm.controls['roleId'].setValue('');
      return;
    }
    // Validation End//

    this.progressBarMode = 'indeterminate';
    try {
      let roleCreated = await this.adminService.addRoleToUser( this.userId, roleId);
      this.dataSource.data.push(roleCreated);    
      this.dataSource._updateChangeSubscription();
    } catch (error) {
      if (error instanceof RoleExitsError) {
        this.snackBar.open(error.getErrorListMessage()[0].description, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      }else {
        this.snackBar.open("Something went wrong role was not added to user", 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        throw error;  
      }
    }
    finally{
      this.progressBarMode = '';
    }
  }
}