import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ClientFormComponent = class ClientFormComponent {
    constructor(fb, route, router, snackBar, clientsService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.clientsService = clientsService;
        this.title = 'CREATE NEW CLIENT';
        this.progressBarMode = '';
    }
    ngOnInit() {
        this.clientForm = this.fb.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            address: [null, Validators.required],
            phone: [null, [Validators.required]]
        });
        this.fillFormEdit();
    }
    fillFormEdit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.clientIdUrl = this.route.snapshot.paramMap.get('id');
            if (this.clientIdUrl) {
                this.title = "EDIT CLIENT";
                let clientToEdit = yield this.clientsService.getClientById(this.clientIdUrl);
                this.clientForm.patchValue({
                    firstName: clientToEdit.firstName,
                    lastName: clientToEdit.lastName,
                    address: clientToEdit.address,
                    phone: clientToEdit.phone
                });
            }
        });
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.clientForm.invalid) {
                return;
            }
            this.progressBarMode = 'indeterminate';
            try {
                if (this.clientIdUrl) {
                    yield this.clientsService.updateClient(this.clientIdUrl, this.clientForm.value);
                    this.snackBar.open(`Client ${this.clientForm.get('firstName').value} ${this.clientForm.get('lastName').value} was successfuly updated`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                }
                else {
                    yield this.clientsService.saveClient(this.clientForm.value);
                    this.snackBar.open(`Client ${this.clientForm.get('firstName').value} ${this.clientForm.get('lastName').value} was successfuly created`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
                }
                this.router.navigate(['/clients']);
            }
            catch (error) {
                throw error;
            }
            finally {
                this.progressBarMode = '';
            }
        });
    }
};
ClientFormComponent = __decorate([
    Component({
        selector: 'app-client-form',
        templateUrl: './client-form.component.html',
        styleUrls: ['./client-form.component.scss']
    })
], ClientFormComponent);
export { ClientFormComponent };
//# sourceMappingURL=client-form.component.js.map