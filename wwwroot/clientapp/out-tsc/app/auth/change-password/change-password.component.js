import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { UserExitsError } from 'ClientApp/app/shared/errors/user-exits-error';
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(route, fb, authService, snackBar, router) {
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.progressBarMode = '';
        this.formErrors = [];
        this.hidePassword = true;
        this.hideCurrentPassword = true;
        this.resetPasswordForm = this.fb.group({
            currentPassword: ['', [Validators.required, Validators.minLength(4)]],
            newPassword: ['', [Validators.required, Validators.minLength(4)]],
            retypePassword: ['', [Validators.required, Validators.minLength(4)]],
        });
    }
    ngOnInit() { }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.resetPasswordForm.get('currentPassword').markAsTouched();
            this.resetPasswordForm.get('newPassword').markAsTouched();
            this.resetPasswordForm.get('retypePassword').markAsTouched();
            this.messageSuccess = '';
            this.messageError = '';
            if (this.resetPasswordForm.valid && this.resetPasswordForm.touched) {
                this.progressBarMode = 'indeterminate';
                try {
                    yield this.authService.changePassword(this.resetPasswordForm.value);
                }
                catch (error) {
                    if (error instanceof UserExitsError) {
                        this.resetPasswordForm.setErrors({ accountExitorPasswordComplexity: true });
                        this.formErrors = error.getErrorListMessage();
                    }
                    else {
                        this.snackBar.open('Something went wrong, password was not updated', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                    }
                }
                finally {
                    this.progressBarMode = '';
                }
            }
        });
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.scss']
    })
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map