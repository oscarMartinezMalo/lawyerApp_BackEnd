import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { User } from 'ClientApp/app/shared/models/user.model';
import { AdminService } from 'ClientApp/app/shared/services/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'edit', 'delete'];

  public progressBarMode = '';
  public dataSource;
  
  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) { 
    this.dataSource = new MatTableDataSource<User>()
  }

  async ngOnInit() {
    this.dataSource.data  = await this.adminService.getAllUsers();
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(row) {
    this.router.navigate(['users/', row.id]);
  }

  async onDelete($event, userToDelete: User){
    $event.stopPropagation();
    const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the user ${userToDelete.firstName} ${userToDelete.lastName} (${userToDelete.email}) `);
    const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });

      dialogRef.afterClosed().subscribe(async dialogResult => {
        try {
          if (dialogResult) {
            await this.adminService.deleteUser(userToDelete.id);
            const index = this.dataSource.data.indexOf(userToDelete);
    
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          }        
        } catch (error) {
          this.snackBar.open('Something when wrong, User was not deleted', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        } finally{
            this.progressBarMode = '';
        }
      });    
  }

  
  onEdit($event, user: User) {
    $event.stopPropagation();
    this.router.navigate(['/users', user.id]);
  }
}
