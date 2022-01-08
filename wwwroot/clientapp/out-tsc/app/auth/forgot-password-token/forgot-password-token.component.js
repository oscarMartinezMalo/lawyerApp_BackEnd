import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { WrongCredentialError } from 'ClientApp/app/shared/errors/wrong-crendential-error';
let ForgotPasswordTokenComponent = class ForgotPasswordTokenComponent {
    constructor(route, fb, authService, snackBar, router) {
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.progressBarMode = '';
        this.formErrors = [];
        this.hidePassword = true;
        this.resetPasswordForm = this.fb.group({
            email: ['', [Validators.required, this.emailValid()]],
            newPassword: ['', [Validators.required, Validators.minLength(4)]],
            retypePassword: ['', [Validators.required, Validators.minLength(4)]],
        });
    }
    ngOnInit() {
        this.forgotPasswordToken = this.route.snapshot.queryParamMap.get('token');
    }
    emailValid() {
        return control => {
            // tslint:disable-next-line: max-line-length
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : { invalidEmail: true };
        };
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.resetPasswordForm.get('email').markAsTouched();
            this.resetPasswordForm.get('newPassword').markAsTouched();
            this.resetPasswordForm.get('retypePassword').markAsTouched();
            this.messageSuccess = '';
            this.messageError = '';
            if (this.resetPasswordForm.valid && this.resetPasswordForm.touched) {
                const email = this.resetPasswordForm.get('email').value.trim();
                const newPassword = this.resetPasswordForm.get('newPassword').value.trim();
                this.progressBarMode = 'indeterminate';
                try {
                    yield this.authService.forgotPasswordToken(email, newPassword, this.forgotPasswordToken);
                    this.snackBar.open('Password successfully changed', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                    this.router.navigate(['/signin']);
                }
                catch (error) {
                    if (error instanceof WrongCredentialError) {
                        this.snackBar.open('Token invalid, expired or wrong email', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                    }
                    this.snackBar.open('Something went wrong, password was not updated', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                }
                finally {
                    this.progressBarMode = '';
                }
            }
        });
    }
};
ForgotPasswordTokenComponent = __decorate([
    Component({
        selector: 'app-forgot-password-token',
        templateUrl: './forgot-password-token.component.html',
        styleUrls: ['./forgot-password-token.component.scss']
    })
], ForgotPasswordTokenComponent);
export { ForgotPasswordTokenComponent };
//# sourceMappingURL=forgot-password-token.component.js.map