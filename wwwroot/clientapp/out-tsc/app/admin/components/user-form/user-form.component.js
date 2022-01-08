import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let UserFormComponent = class UserFormComponent {
    constructor(fb, authService, route, router, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.formErrors = [];
        this.hidePassword = true;
        this.roleList = [];
        this.availableColors = [
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
            { name: 'Primary', color: 'primary' },
        ];
        this.profileForm = this.fb.group({
            // role: [''],
            firstName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
            lastName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
            email: [null, Validators.compose([Validators.required, this.emailValid()])],
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.userId = this.route.snapshot.paramMap.get('id');
            let user = yield this.authService.getUserById(this.userId).toPromise();
            this.roleList = user.roles;
            this.profileForm.get('firstName').setValue(user.firstName);
            this.profileForm.get('lastName').setValue(user.lastName);
            this.profileForm.get('email').setValue(user.email);
        });
    }
    emailValid() {
        return (control) => {
            // tslint:disable-next-line: max-line-length
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : { invalidEmail: true };
        };
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.profileForm.valid && this.profileForm.touched) {
                const firstName = this.profileForm.get('firstName').value.trim();
                const lastName = this.profileForm.get('lastName').value.trim();
                const email = this.profileForm.get('email').value.trim();
                this.progressBarMode = 'indeterminate';
                try {
                    yield this.authService.updateProfile({ id: this.userId, firstName, lastName, email });
                    this.snackBar.open('Profile was successfully updated', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
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
};
UserFormComponent = __decorate([
    Component({
        selector: 'app-user-form',
        templateUrl: './user-form.component.html',
        styleUrls: ['./user-form.component.scss']
    })
], UserFormComponent);
export { UserFormComponent };
//# sourceMappingURL=user-form.component.js.map