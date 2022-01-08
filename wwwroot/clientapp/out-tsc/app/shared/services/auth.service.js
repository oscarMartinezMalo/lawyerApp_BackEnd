import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'ClientApp/environments/environment';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { AccountConfirmationError } from '../errors/account-confirmation-error';
import { AppError } from '../errors/app-error';
import { UserExitsError } from '../errors/user-exits-error';
import { WrongCredentialError } from '../errors/wrong-crendential-error';
let AuthService = class AuthService {
    constructor(http, route, router, snackBar) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = `${environment.baseUrl}api/account/`;
        this.JWT_TOKEN = 'JWT_TOKEN';
        this.REFRESH_TOKEN = 'REFRESH_TOKEN';
        // Set to Undefined to check in the Guard when refresh the page
        this.user$ = new BehaviorSubject(null);
        this.getUser().subscribe(user => { this.user$.next(user); });
    }
    getUser() {
        return this.http.get(this.BASE_URL + 'getUser').pipe(take(1), catchError((error) => {
            return of(null);
        }), map(user => {
            return user;
        }));
    }
    getUserById(userId) {
        return this.http.get(this.BASE_URL + 'getUserById/' + userId).pipe(catchError((error) => {
            return of(null);
        }), map(user => {
            return user;
        }));
    }
    signup(emailPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.BASE_URL + 'signup', emailPassword).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    updateProfile(updateProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.put(this.BASE_URL + 'updateProfile', updateProfile).
                pipe(take(1), catchError((error) => {
                return throwError(error);
            })).toPromise();
        });
    }
    login(emailPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/user-home-page';
            yield this.http.post(this.BASE_URL + 'signin', emailPassword).
                pipe(take(1), map((token) => {
                localStorage.setItem(this.JWT_TOKEN, token.accessToken);
                localStorage.setItem(this.REFRESH_TOKEN, token.refreshToken);
                this.user$.next({
                    id: token.id,
                    firstName: token.firstName,
                    lastName: token.lastName,
                    email: token.email,
                    roles: token.roles
                });
                this.router.navigate([returnUrl]);
            }), catchError((error) => {
                if (error.status === 401) {
                    return throwError(new WrongCredentialError());
                }
                if (error.status === 400) {
                    return throwError(new AccountConfirmationError());
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    changePassword(changePassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.BASE_URL + 'changePassword', changePassword).
                pipe(take(1), map((resp) => {
                this.logOut();
                return resp;
            }), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.put(this.BASE_URL + 'forgotPassword', { email }).
                pipe(take(1), map((resp) => {
                return resp;
            }), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    // The forgotPasswordToken is in the URL an we have to send it back to the server
    forgotPasswordToken(email, password, forgotPasswordToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.BASE_URL + 'forgotPasswordToken', { email, password, forgotPasswordToken }).
                pipe(take(1), map((resp) => {
                return resp;
            }), catchError((error) => {
                if (error.status === 403 || error.status === 401) {
                    return throwError(new WrongCredentialError());
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    refreshToken() {
        const refreshToken = localStorage.getItem(this.REFRESH_TOKEN);
        return this.http.post(this.BASE_URL + 'refresh-token', { refreshToken }).
            pipe(take(1), tap((token) => {
            localStorage.setItem(this.JWT_TOKEN, token.accessToken);
        }));
    }
    get getStoredToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }
    logOut() {
        return __awaiter(this, void 0, void 0, function* () {
            localStorage.removeItem(this.JWT_TOKEN);
            localStorage.removeItem(this.REFRESH_TOKEN);
            this.user$.next(null);
            this.router.navigate(['signin']);
        });
    }
    ///// Abilities and Roles Authorization /////
    ////  Assign roles to an ability method ////
    canReadClients(user) {
        const allowed = ['Admin', 'Lawyer'];
        return this.checkRoleAuthorization(user, allowed);
    }
    // determines if user has matching role
    checkRoleAuthorization(user, allowedRoles) {
        if (!user)
            return false;
        for (const role of allowedRoles) {
            if (user.roles.find(r => r.name == role) != undefined)
                return true;
        }
        return false;
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map