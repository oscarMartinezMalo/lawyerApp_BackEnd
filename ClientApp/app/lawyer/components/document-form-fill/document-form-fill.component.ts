import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { DocumentFile } from 'ClientApp/app/shared/models/document.model';
import { DocumentService } from 'ClientApp/app/shared/services/document.service';

@Component({
  selector: 'app-document-form-fill',
  templateUrl: './document-form-fill.component.html',
  styleUrls: ['./document-form-fill.component.scss']
})
export class DocumentFormFillComponent implements OnInit {
  // Reactive form
  fillForm = new FormGroup({
    documentVariables: new FormArray([])
  });

  progressBarMode = '';
  documentId: string;
  document: DocumentFile;
  
  constructor(    
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
   }

  async ngOnInit() {       
    this.documentId = this.route.snapshot.paramMap.get('id');
    this.document = await this.documentService.getDocumentById(this.documentId);
    let documentVariables = await this.documentService.getVariablesOfDocument(this.document.id) as string[];
    
    for (const variable of documentVariables) {
      this.createVariablesFields(variable);
    }
  }

  createVariablesFields( variableName: string){
    const FormGroupCreated = new FormGroup({ [variableName] : new FormControl(variableName) });
    (this.fillForm.get('documentVariables') as FormArray).push(FormGroupCreated);
  }

  getExpenseForm() {
    return (this.fillForm.get('documentVariables') as FormArray).controls; 
  }

   onSubmit() { 
    if (this.fillForm.invalid) { return; }
    this.progressBarMode = 'indeterminate';

      this.documentService.fillAndDownloadDocument( this.documentId, this.fillForm.controls.documentVariables.value)     
      .pipe( finalize(() => {
        this.progressBarMode = '';
        this.fillForm.reset();
      }))
      .subscribe(httpResponse => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(httpResponse.body)
        a.href = objectUrl
        a.download = "DocumentChanged_" + this.document.name;
        a.click();
        URL.revokeObjectURL(objectUrl);
        this.progressBarMode = '';
      },
      error => { 
        this.snackBar.open('Something when wrong, document was not process', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      });


  }

  getPropertyName(obj){
    return Object.keys(obj)[0];
  }
}
