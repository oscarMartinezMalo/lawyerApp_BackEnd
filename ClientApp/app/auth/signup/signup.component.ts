import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserExitsError } from 'ClientApp/app/shared/errors/user-exits-error';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

    public progressBarMode = '';
    hasUnitNumber = false;
    formErrors: {code:string, description: string}[] = [];
    hidePassword = true;

    signUpForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
        email: ['', Validators.compose([Validators.required, this.emailValid()])],
        password: ['', [Validators.required, Validators.minLength(3)]]
    });

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    async onSubmit() {
        if (this.signUpForm.valid && this.signUpForm.touched) {
            const firstName = this.signUpForm.get('firstName').value.trim();
            const lastName = this.signUpForm.get('lastName').value.trim();
            const email = this.signUpForm.get('email').value.trim();
            const password = this.signUpForm.get('password').value;

            this.progressBarMode = 'indeterminate';
            try {                
                await this.authService.signup({ firstName, lastName, email, password });
                
                this.snackBar.open('User was successfuly created, before login confim email in your email account', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                this.router.navigate(['/signin']);
            } catch (error) {
                if (error instanceof UserExitsError) {
                    this.signUpForm.setErrors({ accountExitorPasswordComplexity: true });
                    this.formErrors = error.getErrorListMessage();
                 } else { throw error;  }
            }finally{
                this.progressBarMode = '';
            }
        }
    }

    emailValid() {
        return (control: { value: string; }) => {
            // tslint:disable-next-line: max-line-length
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : { invalidEmail: true };
        };
    }

}