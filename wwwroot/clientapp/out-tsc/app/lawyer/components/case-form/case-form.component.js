import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { RequireMatch } from 'ClientApp/app/shared/directives/requireMatch.Validator';
import { of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
let CaseFormComponent = class CaseFormComponent {
    constructor(fb, route, router, snackBar, clientsService, casesService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.clientsService = clientsService;
        this.casesService = casesService;
        this.title = 'CREATE NEW CASE';
        this.progressBarMode = '';
        this.clientArray = [];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.caseForm = this.fb.group({
                caseNumber: [null, Validators.required],
                type: [null, Validators.required],
                clientId: ['', [Validators.required, RequireMatch]]
            });
            ///// Call api to retreive values from backend depending of user input  /////
            this.caseForm.controls['clientId'].valueChanges.pipe(startWith(''), switchMap(inputText => {
                return this.getClientListObservable(inputText || '');
            })).subscribe(clientList => {
                if (clientList.length > 0) {
                    this.clientArray = clientList;
                }
                this.filteredOptions = of(clientList);
            });
            this.fillFormEdit(); // Fill the form if is on Edit
        });
    }
    fillFormEdit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.caseIdUrl = this.route.snapshot.paramMap.get('id');
            if (this.caseIdUrl) {
                this.title = "EDIT CASE";
                let caseToEdit = yield this.casesService.getCaseById(this.caseIdUrl);
                this.caseForm.patchValue({
                    caseNumber: caseToEdit.caseNumber,
                    type: caseToEdit.type
                });
                this.setValueAutoComplete(caseToEdit.client); // Set value of form control clientId
            }
        });
    }
    ///// AutoComplete Input /////
    getClientListObservable(val) {
        return this.clientsService.getClientsByQueryObservable(val);
    }
    displayFn(clientArray) {
        return (id) => {
            const correspondingOption = Array.isArray(clientArray) ? clientArray.find(option => option.id === id) : null;
            return correspondingOption ? (`${correspondingOption.firstName} ${correspondingOption.lastName}`) : '';
        };
    }
    // Set value of Autocomplete
    setValueAutoComplete(client) {
        this.clientArray.push(client);
        this.filteredOptions = of(this.clientArray);
        this.caseForm.controls['clientId'].setValue(client.id);
        this.matAutocomplete.displayWith = this.displayFn(this.clientArray);
    }
    ///// End AutoComplete Input  /////
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.caseForm.invalid) {
                return;
            }
            this.progressBarMode = 'indeterminate';
            try {
                if (this.caseIdUrl) { // Edit
                    yield this.casesService.updateCase(this.caseIdUrl, this.caseForm.value);
                }
                else { // Create
                    yield this.casesService.saveCase(this.caseForm.value);
                }
                this.snackBar.open(`Case ${this.caseForm.get('caseNumber').value} was successfuly saved`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                this.router.navigate(['/cases']);
            }
            catch (error) {
                this.snackBar.open('Something when wrong, case was not saved', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                throw error;
            }
            finally {
                this.progressBarMode = '';
            }
        });
    }
};
__decorate([
    ViewChild(MatAutocomplete)
], CaseFormComponent.prototype, "matAutocomplete", void 0);
__decorate([
    ViewChild(MatAutocompleteTrigger)
], CaseFormComponent.prototype, "auto", void 0);
CaseFormComponent = __decorate([
    Component({
        selector: 'app-case-form',
        templateUrl: './case-form.component.html',
        styleUrls: ['./case-form.component.scss']
    })
], CaseFormComponent);
export { CaseFormComponent };
//# sourceMappingURL=case-form.component.js.map