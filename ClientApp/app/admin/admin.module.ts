import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { RoleListComponent } from './components/role-list/role-list.component';
import { MaterialModulesModule } from '../material-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RoleFormComponent } from './components/role-form/role-form.component';
import { RoleAddDeleteUserComponent } from './components/role-add-delete-user/role-add-delete-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { UserAddDeleteRoleComponent } from './components/user-add-delete-role/user-add-delete-role.component';
import { AdminGuard } from '../shared/guards/admin.guard';
@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    RoleListComponent,
    RoleFormComponent,
    RoleAddDeleteUserComponent,
    UserAddDeleteRoleComponent
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    RouterModule.forChild([
      { path: 'roles', component: RoleListComponent, canActivate: [AdminGuard] },  
      { path: 'addUsersToRole/:id', component: RoleAddDeleteUserComponent, canActivate: [AdminGuard] },  
      { path: "roles/:id", component: RoleFormComponent, canActivate: [AdminGuard]},
      { path: 'users', component: UserListComponent, canActivate: [AdminGuard] },        
      { path: "users/:id", component: UserFormComponent, canActivate: [AdminGuard]},
      { path: 'addRolesToUser/:id', component: UserAddDeleteRoleComponent, canActivate: [AdminGuard] },      
    ])
  ]
})
export class AdminModule { }
