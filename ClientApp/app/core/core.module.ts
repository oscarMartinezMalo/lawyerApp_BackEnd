import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModulesModule } from '../material-modules.module';
import { SvgHomeImageComponent } from './components/svg-home-image/svg-home-image.component';
import { LoggedGuard } from '../shared/guards/logged.guard';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { CanReadClientsGuard } from '../shared/guards/can-read-clients.guard';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SvgHomeImageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent, canActivate: [LoggedGuard]},      
      { path: "user-home-page", component: UserHomePageComponent},
    ]
    )
  ],    
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
