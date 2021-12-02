import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
let RoleListComponent = class RoleListComponent {
    constructor(fb, adminService, dialog, router, snackBar) {
        this.fb = fb;
        this.adminService = adminService;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['name', 'addUsers', 'delete'];
        this.progressBarMode = '';
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.roleForm = this.fb.group({
                name: [null, Validators.required],
            });
            this.dataSource.data = yield this.adminService.getRoleList();
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onRowClick(row) {
        this.router.navigate(['roles/', row.id]);
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.roleForm.valid && this.roleForm.touched) {
                const name = this.roleForm.get('name').value.trim();
                this.progressBarMode = 'indeterminate';
                if (name == '') {
                    this.roleForm.get('name').setErrors({ required: true });
                    this.roleForm.get('name').setValue('');
                    return;
                }
                try {
                    let users = [];
                    let role = { id: '', name: name, users: [] };
                    let newRole = yield this.adminService.addRole(role);
                    //Add Role to the list
                    this.dataSource.data = [...this.dataSource.data, newRole];
                    this.snackBar.open(`Role ${name} was Created`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                }
                catch (error) {
                    this.snackBar.open('Something when wrong or Role already exist, Role was not created', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                }
                finally {
                    this.progressBarMode = '';
                }
            }
        });
    }
    onDelete($event, roleToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the role ${roleToDelete.name}`);
            const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });
            dialogRef.afterClosed().subscribe((dialogResult) => __awaiter(this, void 0, void 0, function* () {
                if (dialogResult) {
                    try {
                        yield this.adminService.deleteRoleById(roleToDelete.id);
                        const index = this.dataSource.data.indexOf(roleToDelete);
                        this.dataSource.data.splice(index, 1);
                        this.dataSource._updateChangeSubscription();
                    }
                    catch (error) {
                        this.snackBar.open('Something when wrong, Role was not deleted', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                    }
                }
            }));
        });
    }
    onEdit($event, role) {
        $event.stopPropagation();
        this.router.navigate(['/addUsersToRole', role.id]);
    }
};
RoleListComponent = __decorate([
    Component({
        selector: 'app-role-list',
        templateUrl: './role-list.component.html',
        styleUrls: ['./role-list.component.scss']
    })
], RoleListComponent);
export { RoleListComponent };
//# sourceMappingURL=role-list.component.js.map