import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProfileComponent } from './profile/profile.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { TeamsDropdownComponent } from 'src/app/shared/components/teams-dropdown/teams-dropdown.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordTokenComponent } from './forgot-password-token/forgot-password-token.component';
import { ConfirmValidatorDirective } from './confirm-validator.directive';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from '../shared/guards/auth-guard.guard';
import { LoggedGuard } from '../shared/guards/logged.guard';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotPassComponent,
    UpdateUserComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ForgotPasswordTokenComponent,
    ConfirmValidatorDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    MatProgressBarModule,
    RouterModule.forChild([
      { path: 'signin', component: SigninComponent, canActivate: [LoggedGuard] },
      { path: 'signup', component: SignupComponent, canActivate: [LoggedGuard] },
      { path: 'forgot-password', component: ForgotPassComponent, canActivate: [LoggedGuard] },      
      { path: 'forgot-password-token', component: ForgotPasswordTokenComponent, canActivate: [LoggedGuard] },
      
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
    ])
  ]
})
export class AuthModule { }
