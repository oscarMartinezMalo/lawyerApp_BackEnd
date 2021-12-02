import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AppErrorHandler } from './errors/app-error-handler';
// import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { UploadFileComponent } from '../lawyer/components/upload-file/upload-file.component';
import { MaterialModulesModule } from '../material-modules.module';
import { FileSizePipe } from './pipes/fileSize.pipe';


@NgModule({
  declarations: [
    ErrorPageComponent,
    UploadFileComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,    
    MaterialModulesModule
  ],
  exports: [
    FormsModule,
    ErrorPageComponent,
    FileSizePipe
  ],
  providers: [
    // AuthGuard,
    AuthService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ]
})
export class SharedModule { }


