import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'ClientApp/app/shared/models/role.model';
import { AuthService } from 'ClientApp/app/shared/services/auth.service';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public progressBarMode = '';
  hasUnitNumber = false;
  formErrors: {code:string, description: string}[] = [];
  hidePassword = true;
  roleList: Role[] = [];
  userId: string;

  availableColors: ChipColor[] = [
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
    {name: 'Primary', color: 'primary'},
  ];

  profileForm= this.fb.group({
    // role: [''],
    firstName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
    lastName: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ']*")]],
    email: [null, Validators.compose([Validators.required, this.emailValid()])],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    public router: Router,
    private snackBar: MatSnackBar) {
   }

  async ngOnInit(): Promise<void> {
    this.userId = this.route.snapshot.paramMap.get('id');
    let user = await this.authService.getUserById(this.userId).toPromise();

    this.roleList = user.roles;
    this.profileForm.get('firstName').setValue(user.firstName);
    this.profileForm.get('lastName').setValue(user.lastName);
    this.profileForm.get('email').setValue(user.email);
  }
  
  emailValid() {
    return (control: { value: string; }) => {
        // tslint:disable-next-line: max-line-length
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
  }

  async onSubmit() {
      
    if (this.profileForm.valid && this.profileForm.touched) {
        const firstName = this.profileForm.get('firstName').value.trim();
        const lastName = this.profileForm.get('lastName').value.trim();
        const email = this.profileForm.get('email').value.trim();

        this.progressBarMode = 'indeterminate';
        try {                
            await this.authService.updateProfile({id: this.userId, firstName, lastName, email });
            
            this.snackBar.open('Profile was successfully updated', 'X', { duration: 20000, panelClass: ['green-snackbar'] });
        } catch (error) {
          this.snackBar.open('Something when wrong, profile was not updated', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        }finally{
            this.progressBarMode = '';
        }
    }
  }

}
