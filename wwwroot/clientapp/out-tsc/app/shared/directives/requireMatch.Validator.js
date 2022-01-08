export function RequireMatch(control) {
    const selection = control.value;
    if (typeof selection === 'string') {
        return { incorrect: true };
    }
    return null;
}
export function RequireMatchUser(control) {
    const selection = control.value;
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
//# sourceMappingURL=requireMatch.Validator.js.map