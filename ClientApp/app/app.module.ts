import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModulesModule} from './material-modules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CaseListComponent } from './lawyer/components/case-list/case-list.component';
import { CaseFormComponent } from './lawyer/components/case-form/case-form.component';
import { ClientsDropdownComponent } from './shared/components/clients-dropdown/clients-dropdown.component';
import { DialogCustomComponent } from './shared/components/dialog-custom/dialog-custom.component';
import { ClientFormComponent } from './lawyer/components/client-form/client-form.component';
import { ClientListComponent } from './lawyer/components/client-list/client-list.component';
import { AdminModule } from './admin/admin.module';
import { FirstDocumentFormComponent } from './documents/components/first-document-form/first-document-form.component';
import { DocumentFormListComponent } from './documents/components/document-form-list/document-list.component';
import { DocumentListComponent } from './lawyer/components/document-list/document-list.component';
import { DocumentFormFillComponent } from './lawyer/components/document-form-fill/document-form-fill.component';
import { UserHomePageComponent } from './core/components/user-home-page/user-home-page.component';
import { UploadFileAnonymousComponent } from './shared/components/upload-file-anonymous/upload-file-anonymous.component';
import { DocumentFormFillAnonymousComponent } from './shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component';
import { FileSizePipe } from './shared/pipes/fileSize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CaseFormComponent,
    CaseListComponent,
    ClientsDropdownComponent,
    DialogCustomComponent,
    ClientFormComponent,
    ClientListComponent,
    DocumentFormListComponent,
    FirstDocumentFormComponent,
    DocumentListComponent,
    DocumentFormFillComponent,
    UserHomePageComponent,
    UploadFileAnonymousComponent,
    DocumentFormFillAnonymousComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    
    CoreModule,
    SharedModule,    
    AuthModule,    
    AdminModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
