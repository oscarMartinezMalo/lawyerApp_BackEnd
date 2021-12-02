import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function RequireMatch(control: AbstractControl) {
    const selection: any = control.value;
    if (typeof selection === 'string') {
        return { incorrect: true };
    }
    return null;
}

export function RequireMatchUser(control: AbstractControl) {
    const selection: string = control.value;
    console.log(control);
    let resultArray = selection.split(' ');
    if (resultArray.length < 2) {
        return { incorrect: true };
    }
    return null;
}


// export function RequireMatchUser(val: string): ValidatorFn {
 
//     console.log("here",val);

//     return (control: AbstractControl): ValidationErrors | null => {
   
//       let inputValue: string = control.value;

//       if(inputValue !== val) return { incorrect: true };

//       return null;
      
//     }
   
//   }