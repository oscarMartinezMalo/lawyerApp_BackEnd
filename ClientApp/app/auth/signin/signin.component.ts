import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountConfirmationError } from 'ClientApp/app/shared/errors/account-confirmation-error';
import { WrongCredentialError } from 'ClientApp/app/shared/errors/wrong-crendential-error';
import { AuthService } from '../../shared/services/auth.service';
// import { SharedService } from 'src/app/shared/shared.service';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
    public progressBarMode = '';
    hasUnitNumber = false;
    hidePassword = true;

    signForm = this.fb.group({
        email: ['', Validators.compose([Validators.required, this.emailValid()])],
        password: ['', [Validators.required, Validators.minLength(3)]]
    });

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
        // private sharedService: SharedService
    ) { }
    emailValid() {
        return control => {
            // tslint:disable-next-line: max-line-length
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : { invalidEmail: true };
        };
    }
    
    async onSubmit() {
        if (this.signForm.valid && this.signForm.touched) {
            const email = this.signForm.get('email').value.trim();
            const password = this.signForm.get('password').value;

            this.progressBarMode = 'indeterminate';

            try {                
                await this.authService.login({ email, password });
            } catch (error) {               
                if (error instanceof WrongCredentialError) { 
                    this.signForm.setErrors({ userPass: true });
                 } else if(error instanceof AccountConfirmationError){
                    this.signForm.setErrors({ accountNotConfirmed: true });
                 } else { throw error;  }
            } finally{
                this.progressBarMode = '';
            }
        }
    }
}
