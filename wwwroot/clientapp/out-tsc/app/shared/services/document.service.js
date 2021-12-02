import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'ClientApp/environments/environment';
import { throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { AppError } from '../errors/app-error';
import { UserExitsError } from '../errors/user-exits-error';
let DocumentService = class DocumentService {
    constructor(http, route, router, snackBar) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = `${environment.baseUrl}api/documents/`;
    }
    downloadDocument() {
        return this.http.get(this.BASE_URL, {
            responseType: 'blob'
        });
    }
    uploadDocument(fd) {
        return this.http.post(this.BASE_URL, fd, {
            responseType: 'text',
            reportProgress: true,
            observe: 'events'
        });
    }
    uploadDocumentAnonymous(fd) {
        return this.http.post(this.BASE_URL + "uploadFileAnonymous", fd, {
            responseType: 'text',
            reportProgress: true,
            observe: 'events'
        });
    }
    getDocumentsListOfLawyer() {
        return __awaiter(this, void 0, void 0, function* () {
            let documents = yield this.http.get(this.BASE_URL + 'getAllDocumentsOfLawyer').
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return documents;
        });
    }
    getDocumentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let document = yield this.http.get(this.BASE_URL + 'getDocumentInfoById/' + id).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return document;
        });
    }
    getDocumentByIdAnonymous(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let document = yield this.http.get(this.BASE_URL + 'getDocumentInfoByIdAnonymous/' + id).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
            return document;
        });
    }
    downloadDocumentById(Id) {
        let document = this.http.get(this.BASE_URL + 'GetDocumentById/' + Id, {
            responseType: 'blob',
            observe: 'response' // Add the headers to the response
        }).
            pipe(take(1), catchError((error) => {
            if (error.status === 400) {
                return throwError(new UserExitsError(error));
            }
            return throwError(new AppError(error));
        }));
        return document;
    }
    deleteDocumentByFromUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.delete(this.BASE_URL + 'delete/' + id).
                pipe(take(1), catchError((error) => {
                if (error.status === 400) {
                    return throwError(new UserExitsError(error));
                }
                return throwError(new AppError(error));
            })).toPromise();
        });
    }
    getVariablesOfDocument(documentId) {
        return this.http.get(this.BASE_URL + 'getVariablesOfDocument/' + documentId).
            pipe(take(1), catchError((error) => {
            if (error.status === 400) {
                return throwError(new UserExitsError(error));
            }
            return throwError(new AppError(error));
        })).toPromise();
    }
    getVariablesOfDocumentAnonymous(documentId) {
        return this.http.get(this.BASE_URL + 'getVariablesOfDocumentAnonymous/' + documentId).
            pipe(take(1), catchError((error) => {
            if (error.status === 400) {
                return throwError(new UserExitsError(error));
            }
            return throwError(new AppError(error));
        })).toPromise();
    }
    fillAndDownloadDocument(documentId, variablesList) {
        let document = this.http.post(this.BASE_URL + 'fillAndDownloadDocument/' + documentId, variablesList, {
            responseType: 'blob',
            observe: 'response' // Add the headers to the response
        }).
            pipe(take(1), catchError((error) => {
            return throwError(new AppError(error));
        }));
        return document;
    }
    fillAndDownloadDocumentAnonymous(documentId, variablesList) {
        let document = this.http.post(this.BASE_URL + 'fillAndDownloadDocumentAnonymous/' + documentId, variablesList, {
            responseType: 'blob',
            observe: 'response' // Add the headers to the response
        }).
            pipe(take(1), catchError((error) => {
            return throwError(new AppError(error));
        }));
        return document;
    }
};
DocumentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DocumentService);
export { DocumentService };
//# sourceMappingURL=document.service.js.map