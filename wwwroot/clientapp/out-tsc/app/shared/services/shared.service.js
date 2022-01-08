import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let SharedService = class SharedService {
    constructor() {
        this.isUrlHome$ = new BehaviorSubject(null);
    }
};
SharedService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SharedService);
export { SharedService };
//# sourceMappingURL=shared.service.js.map