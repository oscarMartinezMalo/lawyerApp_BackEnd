var ClientsDropdownComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor, NG_VALIDATORS } from '@angular/forms';
let ClientsDropdownComponent = ClientsDropdownComponent_1 = class ClientsDropdownComponent extends SelectControlValueAccessor {
    // tslint:disable-next-line:variable-name
    constructor(
    // tslint:disable-next-line: variable-name
    _renderer, 
    // tslint:disable-next-line: variable-name
    _elementRef, clientsService) {
        super(_renderer, _elementRef);
        this.clientsService = clientsService;
        this.required = false;
        this.showProgressbar = false;
    }
    //compareWith: (o1: any, o2: any) => boolean;
    compareFn(c1, c2) {
        return c1 && c2 ? c1 === c2 : c1 === c2;
    }
    writeValue(val) {
        this.value = val;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    selectChange($event) {
        this.onTouched();
        this.onChange($event.value);
    }
    validate(control) {
        if (control) {
            if (control.hasError('required')) {
                this.required = true;
                // return { required: true };
            }
            else {
                this.required = false;
                // return { required: false };
            }
        }
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.showProgressbar = true; // Start progress bar
            // this.clients = await this.clientsService.getClientsPromise(); // Call service to get the teams
            // this.showProgressbar = false;
        });
    }
};
ClientsDropdownComponent = ClientsDropdownComponent_1 = __decorate([
    Component({
        selector: 'app-clients-dropdown',
        templateUrl: './clients-dropdown.component.html',
        styleUrls: ['./clients-dropdown.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ClientsDropdownComponent_1),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => ClientsDropdownComponent_1),
                multi: true
            }
        ]
    })
], ClientsDropdownComponent);
export { ClientsDropdownComponent };
//# sourceMappingURL=clients-dropdown.component.js.map