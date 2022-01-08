import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AccountConfirmationError } from 'ClientApp/app/shared/errors/account-confirmation-error';
import { WrongCredentialError } from 'ClientApp/app/shared/errors/wrong-crendential-error';
// import { SharedService } from 'ClientApp/app/shared/shared.service';
let SigninComponent = class SigninComponent {
    constructor(fb, authService
    // private sharedService: SharedService
    ) {
        this.fb = fb;
        this.authService = authService;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.hidePassword = true;
        this.signForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, this.emailValid()])],
            password: ['', [Validators.required, Validators.minLength(3)]]
        });
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
            if (this.signForm.valid && this.signForm.touched) {
                const email = this.signForm.get('email').value.trim();
                const password = this.signForm.get('password').value;
                this.progressBarMode = 'indeterminate';
                try {
                    yield this.authService.login({ email, password });
                }
                catch (error) {
                    if (error instanceof WrongCredentialError) {
                        this.signForm.setErrors({ userPass: true });
                    }
                    else if (error instanceof AccountConfirmationError) {
                        this.signForm.setErrors({ accountNotConfirmed: true });
                    }
                    else {
                        throw error;
                    }
                }
                finally {
                    this.progressBarMode = '';
                }
            }
        });
    }
};
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss']
    })
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map