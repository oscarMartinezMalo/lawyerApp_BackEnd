import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CasesService } from 'ClientApp/app/shared/services/cases.service';
import { ClientsService } from 'ClientApp/app/shared/services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  title = 'CREATE NEW CLIENT';
  progressBarMode = '';
  clientForm: FormGroup;
  clientIdUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private snackBar: MatSnackBar,
    private clientsService: ClientsService,
  ) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, [Validators.required, Validators.minLength(5)]],
      phone: [null, [Validators.required, Validators.minLength(6)]]
    });
    
    this.fillFormEdit();
  }

  private async fillFormEdit() {    
    this.clientIdUrl = this.route.snapshot.paramMap.get('id');

    if ( this.clientIdUrl ) {
      this.title = "EDIT CLIENT";
      let clientToEdit = await this.clientsService.getClientById(this.clientIdUrl);

      this.clientForm.patchValue({
        firstName: clientToEdit.firstName,
        lastName: clientToEdit.lastName,
        address: clientToEdit.address,
        phone: clientToEdit.phone
      });
    }
  }

  async onSubmit() { 
    if (!this.clientForm.valid) { return; }

    this.progressBarMode = 'indeterminate';
    try {

        if(this.clientIdUrl) {
          await this.clientsService.updateClient(this.clientIdUrl, this.clientForm.value);
          this.snackBar.open(`Client ${this.clientForm.get('firstName').value} ${this.clientForm.get('lastName').value} was successfuly updated`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
        } else {
          await this.clientsService.saveClient(this.clientForm.value);
        this.snackBar.open(`Client ${this.clientForm.get('firstName').value} ${this.clientForm.get('lastName').value} was successfuly created`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });

        }

        this.router.navigate(['/clients']);
    } catch (error) {
        throw error; 
    } finally {
        this.progressBarMode = '';
    }
  }
}
