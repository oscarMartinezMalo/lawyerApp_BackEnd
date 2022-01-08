import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
        this.sharedService.isUrlHome$.next(true);
    }
    ngOnDestroy() {
        this.sharedService.isUrlHome$.next(false);
    }
    onScrollClick(scrollElement, valueToScroll) {
        scrollElement.scrollTo({ left: (valueToScroll), behavior: 'smooth' });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map