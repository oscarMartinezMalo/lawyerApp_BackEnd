import { __decorate } from "tslib";
import { HttpEventType } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { environment } from 'ClientApp/environments/environment';
let UploadFileComponent = class UploadFileComponent {
    constructor(documentService, snackBar, authService) {
        this.documentService = documentService;
        this.snackBar = snackBar;
        this.authService = authService;
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
        this.selectedFile = event.target.files[0];
        this.fileSelectedName = this.selectedFile.name;
        this.showSpinner = false;
        this.fileInput.nativeElement.value = ''; // Reset File Input to allow the submittion of the same file multiple times
    }
    onUpload() {
        if (!this.selectedFile) {
            this.snackBar.open(`You have to pick a document`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
            return;
        }
        const fd = new FormData();
        fd.append('document', this.selectedFile);
        this.uploadDocumentWithUser(fd);
    }
    uploadDocumentWithUser(fd) {
        this.documentService.uploadDocument(fd)
            .subscribe(event => {
            if (event.type == HttpEventType.UploadProgress) {
                this.progressBarValue = Math.round(event.loaded / event.total * 100);
            }
            else if (event.type == HttpEventType.Response) {
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
], UploadFileComponent.prototype, "fileInput", void 0);
UploadFileComponent = __decorate([
    Component({
        selector: 'app-upload-file',
        templateUrl: './upload-file.component.html',
        styleUrls: ['./upload-file.component.scss']
    })
], UploadFileComponent);
export { UploadFileComponent };
//# sourceMappingURL=upload-file.component.js.map