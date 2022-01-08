import { __decorate } from "tslib";
import { HttpEventType } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { environment } from 'ClientApp/environments/environment';
let UploadFileAnonymousComponent = class UploadFileAnonymousComponent {
    constructor(documentService, snackBar, authService, router, route) {
        this.documentService = documentService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.selectedFile = null;
        this.fileSelectedName = '';
        this.fileUploadedMessage = 'noShow';
        this.showSpinner = false;
        //// Prgress Bar configuration
        this.progressBarValue = 0;
        this.mode = 'determinate';
        this.color = 'primary';
        /////
        this.BASE_URL = `${environment.baseUrl}api/documents/`;
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        this.progressBarValue = 0;
        this.fileUploadedMessage = 'noShow';
        if (
        // (<File>event.target.files[0]).type != "text/plain" &&
        event.target.files[0].type != "application/msword" && event.target.files[0].type != "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            this.snackBar.open(`File extensions allow (.doc, .docx)`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
            this.showSpinner = false;
            return;
        }
        this.selectedFile = event.target.files[0];
        this.fileSelectedName = this.selectedFile.name;
        this.showSpinner = false;
        this.fileInput.nativeElement.value = ''; // Reset File Input to allow the submittion of the same file multiple times
    }
    onInitialize() {
        // When user doesn't select anything(cancel) do not shot the spinner
        // window.onfocus = this.onFileCancel;
    }
    onUpload() {
        if (!this.selectedFile) {
            this.snackBar.open(`You have to pick a document`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
            return;
        }
        const fd = new FormData();
        fd.append('document', this.selectedFile);
        this.uploadDocumentAnonymous(fd);
    }
    uploadDocumentAnonymous(fd) {
        this.documentService.uploadDocumentAnonymous(fd)
            .subscribe((event) => {
            if (event.type == HttpEventType.UploadProgress) {
                this.progressBarValue = Math.round(event.loaded / event.total * 100);
            }
            else if (event.type == HttpEventType.Response) { // The Final response
                let fileIdFileVariables = JSON.parse(event.body);
                let documentRoute = '/document-form-fill-anonymous/' + fileIdFileVariables.fileId;
                this.router.navigate([documentRoute], { state: { fileName: this.fileSelectedName, fileVariables: fileIdFileVariables.fileVariables } });
                this.onRemoveDocument();
                this.fileUploadedMessage = 'showSuccess';
            }
        }, error => {
            this.fileUploadedMessage = 'showError';
            this.progressBarValue = 0;
        });
    }
    onRemoveDocument() {
        this.fileUploadedMessage = 'noShow';
        this.progressBarValue = 0;
        this.selectedFile = null;
        this.fileSelectedName = '';
    }
};
__decorate([
    ViewChild('fileInput')
], UploadFileAnonymousComponent.prototype, "fileInput", void 0);
UploadFileAnonymousComponent = __decorate([
    Component({
        selector: 'app-upload-file-anonymous',
        templateUrl: './upload-file-anonymous.component.html',
        styleUrls: ['./upload-file-anonymous.component.scss']
    })
], UploadFileAnonymousComponent);
export { UploadFileAnonymousComponent };
//# sourceMappingURL=upload-file-anonymous.component.js.map