var ConfirmValidatorDirective_1;
import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
let ConfirmValidatorDirective = ConfirmValidatorDirective_1 = class ConfirmValidatorDirective {
    validate(control) {
        const controlToCompare = control.parent.get(this.appConfirmValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
};
__decorate([
    Input()
], ConfirmValidatorDirective.prototype, "appConfirmValidator", void 0);
ConfirmValidatorDirective = ConfirmValidatorDirective_1 = __decorate([
    Directive({
        selector: '[appConfirmValidator]',
        providers: [{
                provide: NG_VALIDATORS,
                useExisting: ConfirmValidatorDirective_1,
                multi: true
            }]
    })
], ConfirmValidatorDirective);
export { ConfirmValidatorDirective };
//# sourceMappingURL=confirm-validator.directive.js.map