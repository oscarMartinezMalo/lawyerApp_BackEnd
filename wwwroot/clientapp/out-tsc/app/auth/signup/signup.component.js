import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { UserExitsError } from 'ClientApp/app/shared/errors/user-exits-error';
let SignupComponent = class SignupComponent {
    constructor(fb, authService, router, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.formErrors = [];
        this.hidePassword = true;
        this.signUpForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
            lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
            email: ['', Validators.compose([Validators.required, this.emailValid()])],
            password: ['', [Validators.required, Validators.minLength(3)]]
        });
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.signUpForm.valid && this.signUpForm.touched) {
                const firstName = this.signUpForm.get('firstName').value.trim();
                const lastName = this.signUpForm.get('lastName').value.trim();
                const email = this.signUpForm.get('email').value.trim();
                const password = this.signUpForm.get('password').value;
                this.progressBarMode = 'indeterminate';
                try {
                    yield this.authService.signup({ firstName, lastName, email, password });
                    this.snackBar.open('User was successfuly created, before login confim email in your email account', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                    this.router.navigate(['/signin']);
                }
                catch (error) {
                    if (error instanceof UserExitsError) {
                        this.signUpForm.setErrors({ accountExitorPasswordComplexity: true });
                        this.formErrors = error.getErrorListMessage();
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
    emailValid() {
        return (control) => {
            // tslint:disable-next-line: max-line-length
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : { invalidEmail: true };
        };
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.scss']
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map