import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { RoleExitsError } from 'ClientApp/app/shared/errors/role-exist-error';
import { User } from 'ClientApp/app/shared/models/user.model';
import { AdminService } from 'ClientApp/app/shared/services/admin.service';
import { Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-role-add-delete-user',
  templateUrl: './role-add-delete-user.component.html',
  styleUrls: ['./role-add-delete-user.component.scss']
})
export class RoleAddDeleteUserComponent implements OnInit {

  public dataSource;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'delete'];  
  roleIdUrl: string;
  roleName: string;
  
  filteredOptions: Observable<User[]>;
  userArray: User[];
  editRoleForm: FormGroup;
  progressBarMode: string;
  
  userInputId: string;

  constructor(    
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,     
     private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { 
    this.dataSource = new MatTableDataSource<User>();
  }

  ngOnInit(): void {
    this.editRoleForm = this.fb.group({
      userId: ['' , [Validators.required]]
    });
    
    this.editRoleForm.controls['userId'].valueChanges.pipe(
      startWith(''),
      switchMap(inputText => {    
            return this.getUserListObservable(inputText || '');
       })
    ).subscribe(userList => {      
      if(userList.length > 0){ this.userArray = userList; }
      this.filteredOptions = of(userList); 
    });  

    this.fillFormEdit();
  }
  
  userSelected(user: User){
    this.userInputId = user.id;
  }

  // AutoComplete Input
  getUserListObservable(val: string) {
    return this.adminService.getAllUsersByQuery(val) as Observable<User[]>;
  }  

  displayFn( userArray: User[]): (id: string) => string | null {
    return (id: string) => { 
      const correspondingOption = Array.isArray(userArray) ? userArray.find(option => option.id === id) : null;
      return correspondingOption ? (`${correspondingOption.firstName} ${correspondingOption.lastName}`) : '';
    }
  }

  private async fillFormEdit() {  
    this.roleIdUrl = this.route.snapshot.paramMap.get('id');
    if ( this.roleIdUrl ) {
      let roleToEdit = await this.adminService.getRoleById(this.roleIdUrl);  
      this.roleName = roleToEdit.name;
      this.dataSource.data = roleToEdit.users;
    }
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async onDeleteUserFromRole($event, userToDelete: User){
    $event.stopPropagation();
    const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the user (${userToDelete.email}) from this role?`);
    const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });  
    
      dialogRef.afterClosed().subscribe(async dialogResult => {
        try {
          this.progressBarMode = 'indeterminate';
          if (dialogResult) {
            await this.adminService.deleteUserFromRole(userToDelete.id, this.roleIdUrl);
            const index = this.dataSource.data.indexOf(userToDelete);
    
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          }        
        } catch (error) {
          this.snackBar.open('Something when wrong, User was not deleted from this role', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        } finally{
            this.progressBarMode = '';
        }
      }); 
    }

  async onSubmit() {
    // Validation //
    if (this.editRoleForm.invalid) { return; }

    let userId = this.editRoleForm.controls['userId'].value;

    let userPicked = this.userArray?.find(u => u.id == userId);
    if(!userPicked) {
      this.snackBar.open(`You have to pick a user`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      this.editRoleForm.controls['userId'].setValue('');
      return;
    }
    // Validation End//

    this.progressBarMode = 'indeterminate';
    try {
      let userCreated = await this.adminService.addUserToRole(userId, this.roleIdUrl);
      this.dataSource.data.push(userCreated);    
      this.dataSource._updateChangeSubscription();
    } catch (error) {
      if (error instanceof RoleExitsError) {
        this.snackBar.open(error.getErrorListMessage()[0].description, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      }else {
        this.snackBar.open("Something went wrong user was not added to role", 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        throw error;  
      }
    }
    finally{
      this.progressBarMode = '';
    }
  }
}
