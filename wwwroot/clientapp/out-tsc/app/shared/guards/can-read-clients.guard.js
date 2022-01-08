import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
let CanReadClientsGuard = class CanReadClientsGuard {
    constructor(authService, router, httpErrorService) {
        this.authService = authService;
        this.router = router;
        this.httpErrorService = httpErrorService;
    }
    canActivate(next, state) {
        return this.authService.getUser()
            .pipe(map(user => this.authService.canReadClients(user) ? true : false), tap(isAdminOrLawyer => {
            if (!isAdminOrLawyer) {
                this.router.navigate(['/user-home-page'], { queryParams: { returnUrl: state.url } });
                this.httpErrorService.displayError('You dont have access, please login as a Lawyer or Admin');
            }
        }));
    }
};
CanReadClientsGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CanReadClientsGuard);
export { CanReadClientsGuard };
//# sourceMappingURL=can-read-clients.guard.js.map