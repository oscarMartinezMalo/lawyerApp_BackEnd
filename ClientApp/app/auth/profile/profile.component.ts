import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'ClientApp/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  public progressBarMode = '';
  hasUnitNumber = false;
  formErrors: {code:string, description: string}[] = [];
  hidePassword = true;
  profileForm= this.fb.group({
    // role: [''],
    firstName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
    lastName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
    email: [null, Validators.compose([Validators.required, this.emailValid()])],
});

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private snackBar: MatSnackBar
  ) { }

  async ngOnInit(): Promise<void> {
    let user = await this.authService.getUser().toPromise();

    // this.profileForm.get('role').setValue(user.role);
    this.profileForm.get('firstName').setValue(user.firstName);
    this.profileForm.get('lastName').setValue(user.lastName);
    this.profileForm.get('email').setValue(user.email);
  }

  async onSubmit() {
      
      if (this.profileForm.valid && this.profileForm.touched) {
          const firstName = this.profileForm.get('firstName').value.trim();
          const lastName = this.profileForm.get('lastName').value.trim();
          const email = this.profileForm.get('email').value.trim();

          this.progressBarMode = 'indeterminate';
          try {                
              await this.authService.updateProfile({id: '', firstName, lastName, email });
              this.authService.logOut();
              
              this.snackBar.open('Profile was successfully updated, please Log-in again', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
          } catch (error) {
            this.snackBar.open('Something when wrong, profile was not updated', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
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
