import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
let DocumentFormFillAnonymousComponent = class DocumentFormFillAnonymousComponent {
    constructor(documentService, route, snackBar, router) {
        var _a;
        this.documentService = documentService;
        this.route = route;
        this.snackBar = snackBar;
        this.router = router;
        // Reactive form
        this.fillForm = new FormGroup({
            documentVariables: new FormArray([])
        });
        this.progressBarMode = '';
        this.documentUrlInfo = this.router.getCurrentNavigation().extras.state;
        this.documentVariables = (_a = this.documentUrlInfo) === null || _a === void 0 ? void 0 : _a.fileVariables;
    }
    ngAfterContentInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.documentId = this.route.snapshot.paramMap.get('id');
            // Load variables from api if the data is was not passed though the Url
            if (!this.documentVariables) {
                yield this.loadVariables();
            }
            // If documentVariables are empty go back to upload 
            if (this.documentVariables.length <= 0) {
                this.snackBar.open('There was no keyword found in that document, please submit a new document.', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
                this.router.navigate(['document-upload-anonymous']);
            }
            // Create variables to populate in the form
            for (const variable of this.documentVariables) {
                this.createVariablesFields(variable);
            }
        });
    }
    loadVariables() {
        return __awaiter(this, void 0, void 0, function* () {
            this.document = yield this.documentService.getDocumentByIdAnonymous(this.documentId);
            this.documentVariables = (yield this.documentService.getVariablesOfDocumentAnonymous(this.document.id));
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
        // get the document Name
        let documentName = this.documentUrlInfo ? this.documentUrlInfo.fileName : this.document.name;
        this.documentService.fillAndDownloadDocumentAnonymous(this.documentId, this.fillForm.controls.documentVariables.value)
            .pipe(finalize(() => {
            this.progressBarMode = '';
            this.fillForm.reset();
        }))
            .subscribe(httpResponse => {
            const a = document.createElement('a');
            const objectUrl = URL.createObjectURL(httpResponse.body);
            a.href = objectUrl;
            a.download = "DocumentChanged_" + documentName;
            a.click();
            URL.revokeObjectURL(objectUrl);
        }, error => {
            this.snackBar.open('Something when wrong, document was not process', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        });
    }
    getPropertyName(obj) {
        return Object.keys(obj)[0];
    }
};
DocumentFormFillAnonymousComponent = __decorate([
    Component({
        selector: 'app-document-form-fill-anonymous',
        templateUrl: './document-form-fill-anonymous.component.html',
        styleUrls: ['./document-form-fill-anonymous.component.scss']
    })
], DocumentFormFillAnonymousComponent);
export { DocumentFormFillAnonymousComponent };
//# sourceMappingURL=document-form-fill-anonymous.component.js.map