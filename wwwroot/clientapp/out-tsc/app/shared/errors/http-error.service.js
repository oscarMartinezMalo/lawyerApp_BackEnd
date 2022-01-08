import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HttpErrorService = class HttpErrorService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    displayError(message) {
        this.openPopUp(message);
    }
    openPopUp(message) {
        return __awaiter(this, void 0, void 0, function* () {
            let defaultMessage = message ? message : 'To Access, please Login!!!';
            this.snackBar.open(defaultMessage, 'X', { duration: 10000, panelClass: ['red-snackbar'] });
        });
    }
};
HttpErrorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpErrorService);
export { HttpErrorService };
//# sourceMappingURL=http-error.service.js.map