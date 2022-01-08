import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AuthGuard = class AuthGuard {
    constructor(authService, router, httpErrorService) {
        this.authService = authService;
        this.router = router;
        this.httpErrorService = httpErrorService;
    }
    canActivate(route, state) {
        return this.authService.getUser().pipe(map(user => {
            if (user) {
                return true;
            }
            this.authService.logOut();
            this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
            this.httpErrorService.displayError();
            return false;
        }));
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.guard.js.map