import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
let UserListComponent = class UserListComponent {
    constructor(adminService, dialog, router, snackBar) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'edit', 'delete'];
        this.progressBarMode = '';
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dataSource.data = yield this.adminService.getAllUsers();
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onRowClick(row) {
        this.router.navigate(['users/', row.id]);
    }
    onDelete($event, userToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the user ${userToDelete.firstName} ${userToDelete.lastName} (${userToDelete.email}) `);
            const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });
            dialogRef.afterClosed().subscribe((dialogResult) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (dialogResult) {
                        yield this.adminService.deleteUser(userToDelete.id);
                        const index = this.dataSource.data.indexOf(userToDelete);
                        this.dataSource.data.splice(index, 1);
                        this.dataSource._updateChangeSubscription();
                    }
                }
                catch (error) {
                    this.snackBar.open('Something when wrong, User was not deleted', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                }
                finally {
                    this.progressBarMode = '';
                }
            }));
        });
    }
    onEdit($event, user) {
        $event.stopPropagation();
        this.router.navigate(['/users', user.id]);
    }
};
UserListComponent = __decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.scss']
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map