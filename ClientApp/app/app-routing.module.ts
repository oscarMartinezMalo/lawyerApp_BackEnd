import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserHomePageComponent } from './core/components/user-home-page/user-home-page.component';
import { DocumentFormListComponent } from './documents/components/document-form-list/document-list.component';
import { FirstDocumentFormComponent } from './documents/components/first-document-form/first-document-form.component';
import { CaseFormComponent } from './lawyer/components/case-form/case-form.component';
import { CaseListComponent } from './lawyer/components/case-list/case-list.component';
import { ClientFormComponent } from './lawyer/components/client-form/client-form.component';
import { ClientListComponent } from './lawyer/components/client-list/client-list.component';
import { DocumentFormFillComponent } from './lawyer/components/document-form-fill/document-form-fill.component';
import { DocumentListComponent } from './lawyer/components/document-list/document-list.component';
import { DocumentFormFillAnonymousComponent } from './shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { UploadFileAnonymousComponent } from './shared/components/upload-file-anonymous/upload-file-anonymous.component';
import { UploadFileComponent } from './lawyer/components/upload-file/upload-file.component';
import { CanReadClientsGuard } from './shared/guards/can-read-clients.guard';
import { LoggedGuard } from './shared/guards/logged.guard';
import { AuthGuard } from './shared/guards/auth-guard.guard';


const routes: Routes = [
  { path: "cases/new", component: CaseFormComponent, canActivate: [CanReadClientsGuard]},
  { path: "cases/:id", component: CaseFormComponent, canActivate: [CanReadClientsGuard]},
  { path: "cases", component: CaseListComponent, canActivate: [CanReadClientsGuard]},
  { path: "clients/new", component: ClientFormComponent, canActivate: [CanReadClientsGuard]},
  { path: "clients/:id", component: ClientFormComponent, canActivate: [CanReadClientsGuard]},
  { path: "clients", component: ClientListComponent, canActivate: [CanReadClientsGuard]},
  { path: "documents", component: DocumentListComponent, canActivate: [AuthGuard]},

  { path: "document-upload", component: UploadFileComponent},
  { path: "document-upload-anonymous", component: UploadFileAnonymousComponent},
  // { path: "document-form-list", component: DocumentFormListComponent},
  { path: "document-form-fill/:id", component: DocumentFormFillComponent},
  { path: "document-form-fill-anonymous/:id", component: DocumentFormFillAnonymousComponent},
  { path: "form-first", component: FirstDocumentFormComponent},

  { path: 'not_found', component: ErrorPageComponent, data: { message: 'This page can’t be reached'} },
  { path: '**', redirectTo: '/not_found' }
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
