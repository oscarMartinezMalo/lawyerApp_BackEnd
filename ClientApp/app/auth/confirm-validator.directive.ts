import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmValidatorDirective,
    multi: true
  }]
})
export class ConfirmValidatorDirective implements Validator {
  @Input()  appConfirmValidator: string;
     
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.appConfirmValidator);
    
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual': true };
    }
    return null;
  }
}