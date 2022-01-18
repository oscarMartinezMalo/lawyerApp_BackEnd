import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { DialogCustomComponent, DialogData } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { RequireMatch } from 'ClientApp/app/shared/directives/requireMatch.Validator';
import { Client } from 'ClientApp/app/shared/models/client.model';
import { User } from 'ClientApp/app/shared/models/user.model';
import { AdminService } from 'ClientApp/app/shared/services/admin.service';
import { ClientsService } from 'ClientApp/app/shared/services/clients.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

  title = 'EDIT ROLE';
  progressBarMode = '';
  roleForm: FormGroup;
  roleIdUrl: string;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private adminService: AdminService,    
    private clientsService: ClientsService,
  ) {}

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
    });

    this.fillFormEdit();
  }

    // AutoComplete Input
    getClientListObservable(val: string) {
      return this.clientsService.getClientsByQueryObservable(val);
    }  

  private async fillFormEdit() {    
    this.roleIdUrl = this.route.snapshot.paramMap.get('id');
    this.roleForm.get('id').setValue(this.roleIdUrl);

    if ( this.roleIdUrl ) {
        let roleToEdit = await this.adminService.getRoleById(this.roleIdUrl);

        this.roleForm.patchValue({
          id: roleToEdit.id,
          name: roleToEdit.name
        });
    }
  }

  async onSubmit() {
    if (this.roleForm.invalid) { return; }

    this.progressBarMode = 'indeterminate';
    try {
        await this.adminService.updateRole(this.roleIdUrl, this.roleForm.value);

        this.snackBar.open(`Role ${this.roleForm.get('name').value} was successfuly updated`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
        this.router.navigate(['/roles']);
      } catch (error) {        
          this.snackBar.open(`Role was not updated`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
          throw error; 
      } finally {
          this.progressBarMode = '';
      }
    }
}
