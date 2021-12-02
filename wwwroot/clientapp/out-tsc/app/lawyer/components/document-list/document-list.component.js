import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
let DocumentListComponent = class DocumentListComponent {
    constructor(documentService, dialog, router) {
        this.documentService = documentService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['name', 'dateCreated', 'size', 'fill', 'download', 'delete'];
        this.variablesOfDocument = [];
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dataSource.data = yield this.documentService.getDocumentsListOfLawyer();
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onRowClick(row) {
        // this.router.navigate(['document-upload']);
    }
    onDownload($event, documentToDownload) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            this.documentService
                .downloadDocumentById(documentToDownload.id)
                .subscribe(httpResponse => {
                const a = document.createElement('a');
                const objectUrl = URL.createObjectURL(httpResponse.body);
                a.href = objectUrl;
                a.download = documentToDownload.name;
                a.click();
                URL.revokeObjectURL(objectUrl);
            });
        });
    }
    onDelete($event, documentToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the Document ${documentToDelete.name}`);
            const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });
            dialogRef.afterClosed().subscribe((dialogResult) => __awaiter(this, void 0, void 0, function* () {
                if (dialogResult) {
                    yield this.documentService.deleteDocumentByFromUserId(documentToDelete.id);
                    const index = this.dataSource.data.indexOf(documentToDelete);
                    this.dataSource.data.splice(index, 1);
                    this.dataSource._updateChangeSubscription();
                }
            }));
        });
    }
    onFill($event, documentToFill) {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.navigate(['document-form-fill/', documentToFill.id]);
        });
    }
};
DocumentListComponent = __decorate([
    Component({
        selector: 'app-document-list',
        templateUrl: './document-list.component.html',
        styleUrls: ['./document-list.component.scss']
    })
], DocumentListComponent);
export { DocumentListComponent };
//# sourceMappingURL=document-list.component.js.map