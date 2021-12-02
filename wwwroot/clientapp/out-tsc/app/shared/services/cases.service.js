import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'ClientApp/environments/environment';
import { throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { AppError } from '../errors/app-error';
import { UserExitsError } from '../errors/user-exits-error';
let CasesService = class CasesService {
    constructor(http, route, router, snackBar) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = `${environment.baseUrl}api/cases/`;
    }
    getCaseListOfLawyer() {
        return __awaiter(this, void 0, void 0, function* () {
            let cases = yield this.http.get(this.BASE_URL).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return cases;
        });
    }
    getCaseById(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            let caseByID = yield this.http.get(this.BASE_URL + Id).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return caseByID;
        });
    }
    saveCase(newCase) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.BASE_URL, newCase).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    updateCase(caseId, editCase) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.put(this.BASE_URL + caseId, editCase).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    deleteCaseFromLawyer(caseId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.delete(this.BASE_URL + caseId).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
};
CasesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CasesService);
export { CasesService };
//# sourceMappingURL=cases.service.js.map