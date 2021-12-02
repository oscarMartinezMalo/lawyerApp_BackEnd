import { ErrorHandler } from '@angular/core';
import { AppError } from './app-error';
import { UserNotAuthenticated } from './user-not-authenticated';
import { HttpErrorResponse } from '@angular/common/http';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    // alert('An unexpected error occurred.');
    // console.log(error.status);
    // console.log(error);
    // if (error.error instanceof HttpErrorResponse) {
    //   console.log('Back end return status code:', error.status );
    // }
    // if (error.error instanceof ErrorEvent) {
    //   // client-side error
    //   const errorMessage = `Error: ${error.error.message}`;
    // }

    if (error instanceof UserNotAuthenticated) {
      console.log('userNotAuthenticated');
    }
    console.log(error);
  }
}
