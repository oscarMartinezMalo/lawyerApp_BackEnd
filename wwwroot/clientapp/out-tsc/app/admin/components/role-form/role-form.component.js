import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RoleFormComponent = class RoleFormComponent {
    constructor(fb, route, router, dialog, snackBar, adminService, clientsService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.adminService = adminService;
        this.clientsService = clientsService;
        this.title = 'EDIT ROLE';
        this.progressBarMode = '';
    }
    ngOnInit() {
        this.roleForm = this.fb.group({
            id: [null, Validators.required],
            name: [null, Validators.required],
        });
        this.fillFormEdit();
    }
    // AutoComplete Input
    getClientListObservable(val) {
        return this.clientsService.getClientsByQueryObservable(val);
    }
    fillFormEdit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.roleIdUrl = this.route.snapshot.paramMap.get('id');
            this.roleForm.get('id').setValue(this.roleIdUrl);
            if (this.roleIdUrl) {
                let roleToEdit = yield this.adminService.getRoleById(this.roleIdUrl);
                this.roleForm.patchValue({
                    id: roleToEdit.id,
                    name: roleToEdit.name
                });
            }
        });
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.roleForm.invalid) {
                return;
            }
            this.progressBarMode = 'indeterminate';
            try {
                yield this.adminService.updateRole(this.roleIdUrl, this.roleForm.value);
                this.snackBar.open(`Role ${this.roleForm.get('name').value} was successfuly updated`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                this.router.navigate(['/roles']);
            }
            catch (error) {
                this.snackBar.open(`Role was not updated`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                throw error;
            }
            finally {
                this.progressBarMode = '';
            }
        });
    }
};
RoleFormComponent = __decorate([
    Component({
        selector: 'app-role-form',
        templateUrl: './role-form.component.html',
        styleUrls: ['./role-form.component.scss']
    })
], RoleFormComponent);
export { RoleFormComponent };
//# sourceMappingURL=role-form.component.js.map