import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogCustomComponent, DialogData } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { Role } from 'ClientApp/app/shared/models/role.model';
import { AdminService } from 'ClientApp/app/shared/services/admin.service';
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'addUsers', 'delete'];  
  roleForm: FormGroup;

  public dataSource;
  public progressBarMode = '';
  
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) { 
    this.dataSource = new MatTableDataSource<Role>()
  }

  async ngOnInit() {
    this.roleForm = this.fb.group({
      name: [null, Validators.required],
    });

    this.dataSource.data  = await this.adminService.getRoleList();
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(row) {
    this.router.navigate(['roles/', row.id]);
  }

  async onSubmit(){
    if (this.roleForm.valid && this.roleForm.touched) {      
      const name = this.roleForm.get('name').value.trim();

      this.progressBarMode = 'indeterminate';

      if(name == ''){
         this.roleForm.get('name').setErrors({required: true});
         this.roleForm.get('name').setValue('');
         return;
      }
         
      try {     
        let users = [];   
        let role: Role ={id: '', name: name, users: [] };

        let newRole = await this.adminService.addRole(role);  
        
        //Add Role to the list
        this.dataSource.data = [...this.dataSource.data, newRole];

        this.snackBar.open(`Role ${name} was Created`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
      } catch (error) {
        this.snackBar.open('Something when wrong or Role already exist, Role was not created', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      }finally{
          this.progressBarMode = '';
      }
    }    
  }

  async onDelete($event, roleToDelete: Role) {
    $event.stopPropagation();

    const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the role ${roleToDelete.name}`);
    const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });

    dialogRef.afterClosed().subscribe(async dialogResult => {
      if (dialogResult) {
        try {          
          await this.adminService.deleteRoleById(roleToDelete.id);
          const index = this.dataSource.data.indexOf(roleToDelete);
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription();
        } catch (error) {
          this.snackBar.open('Something when wrong, Role was not deleted', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        }
      }});
  }

  onEdit($event, role: Role) {
    $event.stopPropagation();
    this.router.navigate(['/addUsersToRole', role.id]);
  }
}
