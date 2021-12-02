import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DialogCustomComponent = class DialogCustomComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
};
DialogCustomComponent = __decorate([
    Component({
        selector: 'app-dialog-custom',
        templateUrl: './dialog-custom.component.html',
        styleUrls: ['./dialog-custom.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], DialogCustomComponent);
export { DialogCustomComponent };
export class DialogData {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}
//# sourceMappingURL=dialog-custom.component.js.map