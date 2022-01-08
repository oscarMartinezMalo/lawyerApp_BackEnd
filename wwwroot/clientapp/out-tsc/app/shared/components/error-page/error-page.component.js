import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ErrorPageComponent = class ErrorPageComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.errorMessage = data.message;
        });
    }
};
ErrorPageComponent = __decorate([
    Component({
        selector: 'app-error-page',
        templateUrl: './error-page.component.html',
        styleUrls: ['./error-page.component.scss']
    })
], ErrorPageComponent);
export { ErrorPageComponent };
//# sourceMappingURL=error-page.component.js.map