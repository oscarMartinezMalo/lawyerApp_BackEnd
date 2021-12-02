import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
let CaseListComponent = class CaseListComponent {
    constructor(casesService, dialog, router) {
        this.casesService = casesService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['caseNumber', 'type', 'createdDate', 'clientName', 'delete'];
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dataSource.data = yield this.casesService.getCaseListOfLawyer();
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onRowClick(row) {
        console.log(row);
        this.router.navigate(['cases', row.id]);
    }
    onDelete($event, caseToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the case number ${caseToDelete.caseNumber}`);
            const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });
            dialogRef.afterClosed().subscribe((dialogResult) => __awaiter(this, void 0, void 0, function* () {
                if (dialogResult) {
                    yield this.casesService.deleteCaseFromLawyer(caseToDelete.id);
                    const index = this.dataSource.data.indexOf(caseToDelete);
                    this.dataSource.data.splice(index, 1);
                    this.dataSource._updateChangeSubscription();
                }
            }));
        });
    }
};
CaseListComponent = __decorate([
    Component({
        selector: 'app-case-list',
        templateUrl: './case-list.component.html',
        styleUrls: ['./case-list.component.scss']
    })
], CaseListComponent);
export { CaseListComponent };
//# sourceMappingURL=case-list.component.js.map