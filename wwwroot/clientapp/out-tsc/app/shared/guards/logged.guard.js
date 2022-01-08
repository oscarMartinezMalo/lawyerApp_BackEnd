import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
let LoggedGuard = class LoggedGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.getUser()
            .pipe(take(1), map(user => {
            if (!user) {
                return true;
            }
            this.router.navigate(['/home']);
            return false;
        }));
    }
};
LoggedGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoggedGuard);
export { LoggedGuard };
//# sourceMappingURL=logged.guard.js.map