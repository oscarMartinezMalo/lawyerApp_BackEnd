import { 
  Component,
  OnInit,
  forwardRef,
  Renderer2,
  ElementRef,
  Input
 } from '@angular/core';
import { 
  NG_VALUE_ACCESSOR,
  SelectControlValueAccessor,
  Validator,
  FormControl,
  NG_VALIDATORS
 } from '@angular/forms';
 import { take } from 'rxjs/operators';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients-dropdown',
  templateUrl: './clients-dropdown.component.html',
  styleUrls: ['./clients-dropdown.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ClientsDropdownComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => ClientsDropdownComponent),
        multi: true
    }
]
})
export class ClientsDropdownComponent extends SelectControlValueAccessor
implements OnInit, Validator {
required = false;
value: string;
disabled: boolean;
teams: string[];
showProgressbar = false;

onChange: (_: any) => void;
onTouched: () => void;

compareWith: (o1: any, o2: any) => boolean;
compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 === c2 : c1 === c2;
}

writeValue(val: any): void {
    this.value = val;
}
registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
}
registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
}
setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
}

selectChange($event) {
    this.onTouched();
    this.onChange($event.value);
}

validate(control: FormControl): any {
    if (control) {
        if (control.hasError('required')) {
            this.required = true;
            // return { required: true };
        } else {
            this.required = false;
            // return { required: false };
        }
    }
}

// tslint:disable-next-line:variable-name
constructor(
    // tslint:disable-next-line: variable-name
    _renderer: Renderer2,
    // tslint:disable-next-line: variable-name
    _elementRef: ElementRef,
    private clientsService: ClientsService
) {
    super(_renderer, _elementRef);
}

async ngOnInit() {
    // this.showProgressbar = true; // Start progress bar
    // this.clients = await this.clientsService.getClientsPromise(); // Call service to get the teams
    // this.showProgressbar = false;
}
}
