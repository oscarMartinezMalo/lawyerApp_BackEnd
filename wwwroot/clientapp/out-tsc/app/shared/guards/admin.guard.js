import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
let AdminGuard = class AdminGuard {
    constructor(authService, router, httpErrorService) {
        this.authService = authService;
        this.router = router;
        this.httpErrorService = httpErrorService;
    }
    canActivate(next, state) {
        return this.authService.getUser().pipe(map(user => user && user.roles.find(u => u.name == 'Admin') ? true : false), tap(isAdmin => {
            if (!isAdmin) {
                this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
                this.httpErrorService.displayError('You dont have access, please login as Admin');
            }
        }));
    }
};
AdminGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminGuard);
export { AdminGuard };
//# sourceMappingURL=admin.guard.js.map