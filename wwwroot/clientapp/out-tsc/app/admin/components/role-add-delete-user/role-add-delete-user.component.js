import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { RoleExitsError } from 'ClientApp/app/shared/errors/role-exist-error';
import { of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
let RoleAddDeleteUserComponent = class RoleAddDeleteUserComponent {
    constructor(fb, route, adminService, dialog, snackBar) {
        this.fb = fb;
        this.route = route;
        this.adminService = adminService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'delete'];
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        this.editRoleForm = this.fb.group({
            userId: ['', [Validators.required]]
        });
        this.editRoleForm.controls['userId'].valueChanges.pipe(startWith(''), switchMap(inputText => {
            return this.getUserListObservable(inputText || '');
        })).subscribe(userList => {
            if (userList.length > 0) {
                this.userArray = userList;
            }
            this.filteredOptions = of(userList);
        });
        this.fillFormEdit();
    }
    userSelected(user) {
        this.userInputId = user.id;
    }
    // AutoComplete Input
    getUserListObservable(val) {
        return this.adminService.getAllUsersByQuery(val);
    }
    displayFn(userArray) {
        return (id) => {
            const correspondingOption = Array.isArray(userArray) ? userArray.find(option => option.id === id) : null;
            return correspondingOption ? (`${correspondingOption.firstName} ${correspondingOption.lastName}`) : '';
        };
    }
    fillFormEdit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.roleIdUrl = this.route.snapshot.paramMap.get('id');
            if (this.roleIdUrl) {
                let roleToEdit = yield this.adminService.getRoleById(this.roleIdUrl);
                this.roleName = roleToEdit.name;
                this.dataSource.data = roleToEdit.users;
            }
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onDeleteUserFromRole($event, userToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the user (${userToDelete.email}) from this role?`);
            const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });
            dialogRef.afterClosed().subscribe((dialogResult) => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.progressBarMode = 'indeterminate';
                    if (dialogResult) {
                        yield this.adminService.deleteUserFromRole(userToDelete.id, this.roleIdUrl);
                        const index = this.dataSource.data.indexOf(userToDelete);
                        this.dataSource.data.splice(index, 1);
                        this.dataSource._updateChangeSubscription();
                    }
                }
                catch (error) {
                    this.snackBar.open('Something when wrong, User was not deleted from this role', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                }
                finally {
                    this.progressBarMode = '';
                }
            }));
        });
    }
    onSubmit() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Validation //
            if (this.editRoleForm.invalid) {
                return;
            }
            let userId = this.editRoleForm.controls['userId'].value;
            let userPicked = (_a = this.userArray) === null || _a === void 0 ? void 0 : _a.find(u => u.id == userId);
            if (!userPicked) {
                this.snackBar.open(`You have to pick a user`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                this.editRoleForm.controls['userId'].setValue('');
                return;
            }
            // Validation End//
            this.progressBarMode = 'indeterminate';
            try {
                let userCreated = yield this.adminService.addUserToRole(userId, this.roleIdUrl);
                this.dataSource.data.push(userCreated);
                this.dataSource._updateChangeSubscription();
            }
            catch (error) {
                if (error instanceof RoleExitsError) {
                    this.snackBar.open(error.getErrorListMessage()[0].description, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                }
                else {
                    this.snackBar.open("Something went wrong user was not added to role", 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                    throw error;
                }
            }
            finally {
                this.progressBarMode = '';
            }
        });
    }
};
RoleAddDeleteUserComponent = __decorate([
    Component({
        selector: 'app-role-add-delete-user',
        templateUrl: './role-add-delete-user.component.html',
        styleUrls: ['./role-add-delete-user.component.scss']
    })
], RoleAddDeleteUserComponent);
export { RoleAddDeleteUserComponent };
//# sourceMappingURL=role-add-delete-user.component.js.map