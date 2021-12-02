import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserExitsError } from 'ClientApp/app/shared/errors/user-exits-error';
import { AuthService } from 'ClientApp/app/shared/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public progressBarMode = '';
  messageSuccess: string;
  messageError: string;
  formErrors: {code:string, description: string}[] = [];

  hidePassword = true;
  hideCurrentPassword = true;

  resetPasswordForm = this.fb.group({
    currentPassword: ['', [Validators.required, Validators.minLength(4)]],
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
  ngOnInit(): void { }

  async onSubmit() {  
    this.resetPasswordForm.get('currentPassword').markAsTouched();
    this.resetPasswordForm.get('newPassword').markAsTouched();
    this.resetPasswordForm.get('retypePassword').markAsTouched();
    this.messageSuccess = '';
    this.messageError ='';

    if (this.resetPasswordForm.valid && this.resetPasswordForm.touched) {
      this.progressBarMode = 'indeterminate';

      try {
         await this.authService.changePassword(this.resetPasswordForm.value);
      } catch (error) {

        if (error instanceof UserExitsError) {
          this.resetPasswordForm.setErrors({ accountExitorPasswordComplexity: true });
          this.formErrors = error.getErrorListMessage();
         } else {
          this.snackBar.open('Something went wrong, password was not updated', 'X', {duration: 20000,panelClass: ['red-snackbar']});         
         }
      } finally {
        this.progressBarMode = '';
      }
    }
  }
}
