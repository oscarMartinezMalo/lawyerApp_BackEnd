import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
let DocumentFormFillComponent = class DocumentFormFillComponent {
    constructor(documentService, route, snackBar) {
        this.documentService = documentService;
        this.route = route;
        this.snackBar = snackBar;
        // Reactive form
        this.fillForm = new FormGroup({
            documentVariables: new FormArray([])
        });
        this.progressBarMode = '';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.documentId = this.route.snapshot.paramMap.get('id');
            this.document = yield this.documentService.getDocumentById(this.documentId);
            let documentVariables = yield this.documentService.getVariablesOfDocument(this.document.id);
            for (const variable of documentVariables) {
                this.createVariablesFields(variable);
            }
        });
    }
    createVariablesFields(variableName) {
        const FormGroupCreated = new FormGroup({ [variableName]: new FormControl(variableName) });
        this.fillForm.get('documentVariables').push(FormGroupCreated);
    }
    getExpenseForm() {
        return this.fillForm.get('documentVariables').controls;
    }
    onSubmit() {
        if (this.fillForm.invalid) {
            return;
        }
        this.progressBarMode = 'indeterminate';
        this.documentService.fillAndDownloadDocument(this.documentId, this.fillForm.controls.documentVariables.value)
            .pipe(finalize(() => {
            this.progressBarMode = '';
            this.fillForm.reset();
        }))
            .subscribe(httpResponse => {
            const a = document.createElement('a');
            const objectUrl = URL.createObjectURL(httpResponse.body);
            a.href = objectUrl;
            a.download = "DocumentChanged_" + this.document.name;
            a.click();
            URL.revokeObjectURL(objectUrl);
            this.progressBarMode = '';
        }, error => {
            this.snackBar.open('Something when wrong, document was not process', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        });
    }
    getPropertyName(obj) {
        return Object.keys(obj)[0];
    }
};
DocumentFormFillComponent = __decorate([
    Component({
        selector: 'app-document-form-fill',
        templateUrl: './document-form-fill.component.html',
        styleUrls: ['./document-form-fill.component.scss']
    })
], DocumentFormFillComponent);
export { DocumentFormFillComponent };
//# sourceMappingURL=document-form-fill.component.js.map