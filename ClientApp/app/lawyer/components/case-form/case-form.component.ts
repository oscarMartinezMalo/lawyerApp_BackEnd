import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { RequireMatch } from 'ClientApp/app/shared/directives/requireMatch.Validator';
import { Case } from 'ClientApp/app/shared/models/case.model';
import { Client } from 'ClientApp/app/shared/models/client.model';
import { CasesService } from 'ClientApp/app/shared/services/cases.service';
import { ClientsService } from 'ClientApp/app/shared/services/clients.service';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.scss']
})
export class CaseFormComponent implements OnInit {
  title = 'CREATE NEW CASE';
  progressBarMode = '';
  caseForm: FormGroup;
  caseIdUrl: string;
  @ViewChild(MatAutocomplete) matAutocomplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) auto: MatAutocompleteTrigger;
  
  filteredOptions: Observable<Client[]>;
  clientArray: Client[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private snackBar: MatSnackBar,
    private clientsService: ClientsService,
    private casesService: CasesService
    ) {
  }

  async ngOnInit() {

    this.caseForm = this.fb.group({
      caseNumber: [null, Validators.required],
      type: [null, Validators.required],
      clientId: ['' , [Validators.required, RequireMatch]]
    });
      
    ///// Call api to retreive values from backend depending of user input  /////
    this.caseForm.controls['clientId'].valueChanges.pipe(
      startWith(''),
      switchMap(inputText => {    
            return this.getClientListObservable(inputText || '')
       })
    ).subscribe(clientList => {      
      if(clientList.length > 0){ this.clientArray = clientList; }
      this.filteredOptions = of(clientList); 
    });   
   
    this.fillFormEdit();    // Fill the form if is on Edit
  }

  private async fillFormEdit() {    
    this.caseIdUrl = this.route.snapshot.paramMap.get('id');

    if ( this.caseIdUrl ) {
      this.title = "EDIT CASE";      
      let caseToEdit = await this.casesService.getCaseById(this.caseIdUrl) as Case;

      this.caseForm.patchValue({
        caseNumber: caseToEdit.caseNumber,
        type: caseToEdit.type
      });      

      this.setValueAutoComplete(caseToEdit.client);      // Set value of form control clientId
    }
  }

  ///// AutoComplete Input /////
    getClientListObservable(val: string) {
      return this.clientsService.getClientsByQueryObservable(val);
    }  

    displayFn( clientArray: Client[]): (id: number) => string | null {
      return (id: number) => { 
        const correspondingOption = Array.isArray(clientArray) ? clientArray.find(option => option.id === id) : null;
        return correspondingOption ? (`${correspondingOption.firstName} ${correspondingOption.lastName}`) : '';
      }
    }
    
    // Set value of Autocomplete
    setValueAutoComplete(client: Client) {
      this.clientArray.push(client);
      this.filteredOptions = of(this.clientArray);
      this.caseForm.controls['clientId'].setValue(client.id);
      this.matAutocomplete.displayWith = this.displayFn(this.clientArray);
  }
  ///// End AutoComplete Input  /////

  async onSubmit() {    
    if (this.caseForm.invalid) { return; }

    this.progressBarMode = 'indeterminate';
    try {
        if(this.caseIdUrl) {  // Edit
          await this.casesService.updateCase(this.caseIdUrl, this.caseForm.value);
        } else {  // Create
          await this.casesService.saveCase(this.caseForm.value);
        }
        this.snackBar.open(`Case ${this.caseForm.get('caseNumber').value} was successfuly saved`, 'X', { duration: 20000, panelClass: ['green-snackbar'] });
        this.router.navigate(['/cases']);
    } catch (error) {
        this.snackBar.open('Something when wrong, case was not saved', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
        throw error; 
    } finally {
        this.progressBarMode = '';
    }
  }
  
}
