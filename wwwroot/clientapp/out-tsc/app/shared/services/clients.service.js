import { __awaiter, __decorate } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'ClientApp/environments/environment';
import { throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { AppError } from '../errors/app-error';
import { UserExitsError } from '../errors/user-exits-error';
let ClientsService = class ClientsService {
    constructor(http, route, router, snackBar) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = `${environment.baseUrl}api/clients/`;
        this.opts = [];
    }
    // This is for the Client autoComplete int the add new case view
    getClientsByQueryObservable(clientNameQuery) {
        const params = new HttpParams({ fromString: `query=${clientNameQuery}` });
        return this.http.get(this.BASE_URL + 'getClientsByQuery', { params });
    }
    getClientListOfLawyer() {
        return __awaiter(this, void 0, void 0, function* () {
            let clients = yield this.http.get(this.BASE_URL + 'getAllClientsOfaLawyer').
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return clients;
        });
    }
    getClientById(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield this.http.get(this.BASE_URL + "getClientById/" + Id).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return client;
        });
    }
    saveClient(newClient) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.BASE_URL + 'saveClient', newClient).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    updateClient(clientIdUrl, clientForm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.put(this.BASE_URL + 'updateClient/' + clientIdUrl, clientForm).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    deleteClientFromLawyer(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.delete(this.BASE_URL + 'delete/' + clientId).
                pipe(take(1), catchError((error) => {
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
};
ClientsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClientsService);
export { ClientsService };
//# sourceMappingURL=clients.service.js.map