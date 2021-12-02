import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ForgotPassComponent = class ForgotPassComponent {
    constructor(fb, authService, snackBar
    // private sharedService: SharedService
    ) {
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.forgotPasswordForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, this.emailValid()])],
        });
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.forgotPasswordForm.valid && this.forgotPasswordForm.touched) {
                const email = this.forgotPasswordForm.get('email').value.trim();
                this.progressBarMode = 'indeterminate';
                try {
                    yield this.authService.forgotPassword(email);
                    this.snackBar.open('A reset password link was send to your email.', 'X', { duration: 8000 });
                    this.forgotPasswordForm.reset();
                    this.forgotPasswordForm.get('email').setErrors(null);
                }
                catch (error) {
                }
                finally {
                    this.progressBarMode = '';
                }
            }
        });
    }
    emailValid() {
        return control => {
            // tslint:disable-next-line: max-line-length
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : { invalidEmail: true };
        };
    }
};
ForgotPassComponent = __decorate([
    Component({
        selector: 'app-forgot-pass',
        templateUrl: './forgot-pass.component.html',
        styleUrls: ['./forgot-pass.component.scss']
    })
], ForgotPassComponent);
export { ForgotPassComponent };
//# sourceMappingURL=forgot-pass.component.js.map