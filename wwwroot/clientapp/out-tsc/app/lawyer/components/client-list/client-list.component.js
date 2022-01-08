import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogCustomComponent, DialogData } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
let ClientListComponent = class ClientListComponent {
    constructor(clientsService, dialog, router) {
        this.clientsService = clientsService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['firstName', 'lastName', 'address', 'phone', 'delete'];
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dataSource.data = yield this.clientsService.getClientListOfLawyer();
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onRowClick(row) {
        this.router.navigate(['clients', row.id]);
    }
    onDelete($event, clientToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the Client ${clientToDelete.firstName} ${clientToDelete.lastName}`);
            const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });
            dialogRef.afterClosed().subscribe((dialogResult) => __awaiter(this, void 0, void 0, function* () {
                if (dialogResult) {
                    yield this.clientsService.deleteClientFromLawyer(clientToDelete.id);
                    const index = this.dataSource.data.indexOf(clientToDelete);
                    console.log(index);
                    this.dataSource.data.splice(index, 1);
                    this.dataSource._updateChangeSubscription();
                }
            }));
        });
    }
};
ClientListComponent = __decorate([
    Component({
        selector: 'app-client-list',
        templateUrl: './client-list.component.html',
        styleUrls: ['./client-list.component.scss']
    })
], ClientListComponent);
export { ClientListComponent };
//# sourceMappingURL=client-list.component.js.map