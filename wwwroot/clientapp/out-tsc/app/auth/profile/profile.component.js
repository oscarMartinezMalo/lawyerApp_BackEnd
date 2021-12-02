import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ProfileComponent = class ProfileComponent {
    constructor(fb, authService, router, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.formErrors = [];
        this.hidePassword = true;
        this.profileForm = this.fb.group({
            // role: [''],
            firstName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
            lastName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
            email: [null, Validators.compose([Validators.required, this.emailValid()])],
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.authService.getUser().toPromise();
            // this.profileForm.get('role').setValue(user.role);
            this.profileForm.get('firstName').setValue(user.firstName);
            this.profileForm.get('lastName').setValue(user.lastName);
            this.profileForm.get('email').setValue(user.email);
        });
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.profileForm.valid && this.profileForm.touched) {
                const firstName = this.profileForm.get('firstName').value.trim();
                const lastName = this.profileForm.get('lastName').value.trim();
                const email = this.profileForm.get('email').value.trim();
                this.progressBarMode = 'indeterminate';
                try {
                    yield this.authService.updateProfile({ id: '', firstName, lastName, email });
                    this.authService.logOut();
                    this.snackBar.open('Profile was successfully updated, please Log-in again', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                }
                catch (error) {
                    this.snackBar.open('Something when wrong, profile was not updated', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
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
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map