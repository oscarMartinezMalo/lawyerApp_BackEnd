import { __awaiter, __decorate } from "tslib";
import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "ClientApp/environments/environment";
import { throwError } from "rxjs";
import { take, catchError } from "rxjs/operators";
import { AppError } from "../errors/app-error";
import { RoleExitsError } from "../errors/role-exist-error";
import { UserExitsError } from "../errors/user-exits-error";
let AdminService = class AdminService {
    constructor(http, route, router, snackBar) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = `${environment.baseUrl}api/account/`;
    }
    getRoleList() {
        return __awaiter(this, void 0, void 0, function* () {
            let roles = yield this.http.get(this.BASE_URL + "roles").
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return roles;
        });
    }
    getRolesOfUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.http.get(this.BASE_URL + "getUser/" + userId).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return user;
        });
    }
    addRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(this.BASE_URL + 'addRole', role).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    deleteRoleById(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.delete(this.BASE_URL + 'deleteRole/' + roleId).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    deleteRoleFromUser(userId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(this.BASE_URL + 'deleteUserfromRole/', { userId, roleId }).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield this.http.get(this.BASE_URL + "users").
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return users;
        });
    }
    getAllUsersByQuery(userNameQuery) {
        const params = new HttpParams({ fromString: `query=${userNameQuery}` });
        return this.http.get(this.BASE_URL + 'getAllUsersByQuery', { params });
    }
    getAllRolesByQuery(roleNameQuery) {
        const params = new HttpParams({ fromString: `query=${roleNameQuery}` });
        return this.http.get(this.BASE_URL + 'getAllRolesByQuery', { params });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.delete(this.BASE_URL + 'deleteUser/' + userId).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    getRoleById(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            let role = yield this.http.get(this.BASE_URL + "getRoleById/" + Id).
                pipe(take(1), catchError((error) => {
                this.router.navigate(['roles']);
                return throwError(new AppError(error));
            })).toPromise();
            return role;
        });
    }
    updateRole(roleIdUrl, roleForm) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.http.put(this.BASE_URL + 'updateRole/' + roleIdUrl, roleForm).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
            return result;
        });
    }
    deleteUserFromRole(userId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.http.post(this.BASE_URL + 'deleteUserfromRole/', { userId, roleId }).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
            return result;
        });
    }
    addUserToRole(userId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.http.post(this.BASE_URL + 'addUserToRole/', { userId, roleId }).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new RoleExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return result;
        });
    }
    addRoleToUser(userId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.http.post(this.BASE_URL + 'addRoleToUser/', { userId, roleId }).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new RoleExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return result;
        });
    }
};
AdminService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map