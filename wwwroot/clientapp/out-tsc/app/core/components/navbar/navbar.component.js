import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints } from '@angular/cdk/layout';
let NavbarComponent = class NavbarComponent {
    constructor(breakpointObserver, authService, scrollDispatcher, zone, sharedService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.scrollDispatcher = scrollDispatcher;
        this.zone = zone;
        this.sharedService = sharedService;
        this.toolbarColor = 'navbar-solid-color';
        this.isHandset$ = this.breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.Small])
            .pipe(map(result => result.matches));
        this.userIsLawyerorAdmin = false;
        sharedService.isUrlHome$.subscribe(urlIsHome => {
            this.urlIsHome = urlIsHome;
            if (urlIsHome) {
                this.toolbarColor = 'navbar-transparent';
            }
            else {
                this.toolbarColor = 'navbar-solid-color';
            }
        });
        this.scrollDispatcher.scrolled().subscribe((data) => {
            const scrollTop = data.getElementRef().nativeElement.scrollTop || 0;
            this.zone.run(() => {
                this.toolbarColor = (scrollTop < 50 && this.urlIsHome) ? 'navbar-transparent' : 'navbar-solid-color';
            });
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.drawerClose();
            this.isAdminOrLawyer();
        });
    }
    drawerClose() {
        this.isHandset$.subscribe(isHandset => {
            var _a;
            if (isHandset) {
                (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.toggle(false);
            }
        });
    }
    isAdminOrLawyer() {
        this.authService.user$
            .pipe(map(user => {
            return this.authService.canReadClients(user) ? true : false;
        })).subscribe(result => {
            return this.userIsLawyerorAdmin = result;
        });
    }
};
__decorate([
    ViewChild('drawer')
], NavbarComponent.prototype, "drawer", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map