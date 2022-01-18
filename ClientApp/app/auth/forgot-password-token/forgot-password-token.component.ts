import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppError } from 'ClientApp/app/shared/errors/app-error';
import { WrongCredentialError } from 'ClientApp/app/shared/errors/wrong-crendential-error';
import { AuthService } from 'ClientApp/app/shared/services/auth.service';
import { ConfirmValidatorDirective } from '../confirm-validator.directive';

@Component({
  selector: 'app-forgot-password-token',
  templateUrl: './forgot-password-token.component.html',
  styleUrls: ['./forgot-password-token.component.scss']
})
export class ForgotPasswordTokenComponent implements OnInit {
  public progressBarMode = '';
  messageSuccess: string;
  messageError: string;
  formErrors: {code:string, description: string}[] = [];
  forgotPasswordToken: string;
  hidePassword = true;

  resetPasswordForm = this.fb.group({
    email: ['', [Validators.required, this.emailValid()]],
    newPassword: ['', [Validators.required, Validators.minLength(4)]],
    retypePassword: ['', [Validators.required, Validators.minLength(4)]],
  });
  
  constructor(    
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,    
    private router: Router,) { 
  }
  ngOnInit(): void {    
    this.forgotPasswordToken = this.route.snapshot.queryParamMap.get('token');
  }

  emailValid() {
    return control => {
        // tslint:disable-next-line: max-line-length
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
  }

  async onSubmit() {  
    this.resetPasswordForm.get('email').markAsTouched();
    this.resetPasswordForm.get('newPassword').markAsTouched();
    this.resetPasswordForm.get('retypePassword').markAsTouched();
    this.messageSuccess = '';
    this.messageError ='';

    if (this.resetPasswordForm.valid && this.resetPasswordForm.touched) {
      const email = this.resetPasswordForm.get('email').value.trim();
      const newPassword = this.resetPasswordForm.get('newPassword').value.trim();
      this.progressBarMode = 'indeterminate';

      try {
         await this.authService.forgotPasswordToken(email, newPassword, this.forgotPasswordToken);
         this.snackBar.open('Password successfully changed', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
         this.router.navigate(['/signin']);
      } catch (error) {

        if (error instanceof WrongCredentialError) {
          this.snackBar.open('Token invalid, expired or wrong email', 'X', {duration: 20000, panelClass: ['red-snackbar'] });
         }

        this.snackBar.open('Something went wrong, password was not updated', 'X', {duration: 20000,panelClass: ['red-snackbar']});         
      } finally {
        this.progressBarMode = '';
      }
    }
  }
}
