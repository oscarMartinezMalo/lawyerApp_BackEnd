import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { HttpErrorService } from '../errors/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private httpErrorService: HttpErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenizedReq = this.addTokenToHeader(req);

    return next.handle(tokenizedReq)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const authService = this.injector.get(AuthService);
          // if (error.status === 401) {
          //   return authService.refreshToken().pipe(switchMap(() => {
          //     const newReq = this.addTokenToHeader(req);
          //     return next.handle(newReq);
          //   }));
          // }

          return throwError(error);
        })
      );
  }

  addTokenToHeader(req: HttpRequest<any>) {
    const token = localStorage.getItem('JWT_TOKEN');
    const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    return tokenizedReq;
  }
}
