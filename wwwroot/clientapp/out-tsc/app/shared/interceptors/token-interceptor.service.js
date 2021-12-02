import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector, httpErrorService) {
        this.injector = injector;
        this.httpErrorService = httpErrorService;
    }
    intercept(req, next) {
        const tokenizedReq = this.addTokenToHeader(req);
        return next.handle(tokenizedReq)
            .pipe(catchError((error) => {
            const authService = this.injector.get(AuthService);
            // if (error.status === 401) {
            //   return authService.refreshToken().pipe(switchMap(() => {
            //     const newReq = this.addTokenToHeader(req);
            //     return next.handle(newReq);
            //   }));
            // }
            return throwError(error);
        }));
    }
    addTokenToHeader(req) {
        const token = localStorage.getItem('JWT_TOKEN');
        const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        return tokenizedReq;
    }
};
TokenInterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TokenInterceptorService);
export { TokenInterceptorService };
//# sourceMappingURL=token-interceptor.service.js.map