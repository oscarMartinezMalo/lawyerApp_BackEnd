import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { RoleExitsError } from 'ClientApp/app/shared/errors/role-exist-error';
import { of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
let UserAddDeleteRoleComponent = class UserAddDeleteRoleComponent {
    constructor(fb, adminService, dialog, route, router, snackBar) {
        this.fb = fb;
        this.adminService = adminService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['name', 'delete'];
        this.progressBarMode = '';
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.roleForm = this.fb.group({
                roleId: [null, Validators.required],
            });
            this.userId = this.route.snapshot.paramMap.get('id');
            this.user = yield this.adminService.getRolesOfUser(this.userId);
            this.dataSource.data = this.user.roles;
            this.roleForm.controls['roleId'].valueChanges.pipe(startWith(''), switchMap(inputText => {
                return this.getRoleListObservable(inputText || '');
            })).subscribe((roleList) => {
                if (roleList.length > 0) {
                    this.roleArray = roleList;
                }
                this.filteredOptions = of(roleList);
            });
        });
    }
    // AutoComplete Input
    getRoleListObservable(val) {
        return this.adminService.getAllRolesByQuery(val);
    }
    displayFn(roleArray) {
        return (id) => {
            const correspondingOption = Array.isArray(roleArray) ? roleArray.find(option => option.id === id) : null;
            return correspondingOption ? (`${correspondingOption.name}`) : '';
        };
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    // Delete role from User
    onDelete($event, roleToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the role ${roleToDelete.name} from this User ${this.user.firstName} ${this.user.lastName} (${this.user.email})`);
            const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });
            dialogRef.afterClosed().subscribe((dialogResult) => __awaiter(this, void 0, void 0, function* () {
                if (dialogResult) {
                    try {
                        yield this.adminService.deleteRoleFromUser(this.user.id, roleToDelete.id);
                        const index = this.dataSource.data.indexOf(roleToDelete);
                        this.dataSource.data.splice(index, 1);
                        this.dataSource._updateChangeSubscription();
                    }
                    catch (error) {
                        this.snackBar.open('Something went wrong, Role was not deleted', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                    }
                }
            }));
        });
    }
    onSubmit() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Validation //
            if (this.roleForm.invalid) {
                return;
            }
            let roleId = this.roleForm.controls['roleId'].value;
            let userPicked = (_a = this.roleArray) === null || _a === void 0 ? void 0 : _a.find(u => u.id == roleId);
            if (!userPicked) {
                this.snackBar.open(`You have to pick a role`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                this.roleForm.controls['roleId'].setValue('');
                return;
            }
            // Validation End//
            this.progressBarMode = 'indeterminate';
            try {
                console.log(this.userId, roleId);
                let roleCreated = yield this.adminService.addRoleToUser(this.userId, roleId);
                this.dataSource.data.push(roleCreated);
                this.dataSource._updateChangeSubscription();
            }
            catch (error) {
                if (error instanceof RoleExitsError) {
                    this.snackBar.open(error.getErrorListMessage()[0].description, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                }
                else {
                    this.snackBar.open("Something went wrong role was not added to user", 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                    throw error;
                }
            }
            finally {
                this.progressBarMode = '';
            }
        });
    }
};
UserAddDeleteRoleComponent = __decorate([
    Component({
        selector: 'app-user-add-delete-role',
        templateUrl: './user-add-delete-role.component.html',
        styleUrls: ['./user-add-delete-role.component.scss']
    })
], UserAddDeleteRoleComponent);
export { UserAddDeleteRoleComponent };
//# sourceMappingURL=user-add-delete-role.component.js.map