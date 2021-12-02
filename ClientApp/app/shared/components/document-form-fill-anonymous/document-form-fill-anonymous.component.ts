import { HttpEventType } from '@angular/common/http';
import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { DocumentFile } from '../../models/document.model';
import { FileIdFileVariables } from '../../models/fileIdFileVariables.model';
import { AuthService } from '../../services/auth.service';
import { DocumentService } from '../../services/document.service';

interface DocumentUrlInfo {
  fileName: string;
  fileVariables: string[];
}

@Component({
  selector: 'app-document-form-fill-anonymous',
  templateUrl: './document-form-fill-anonymous.component.html',
  styleUrls: ['./document-form-fill-anonymous.component.scss']
})
export class DocumentFormFillAnonymousComponent implements AfterContentInit {
  // Reactive form
  fillForm = new FormGroup({
    documentVariables: new FormArray([])
  });

  progressBarMode = '';
  documentId: string;
  document: DocumentFile;
  documentVariables: string[];
  documentUrlInfo: DocumentUrlInfo;
  
  constructor(    
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {    
    this.documentUrlInfo =  this.router.getCurrentNavigation().extras.state as {fileName: string, fileVariables: string[]};
    this.documentVariables = this.documentUrlInfo?.fileVariables;
  }

 async ngAfterContentInit() {
    this.documentId = this.route.snapshot.paramMap.get('id');

    // Load variables from api if the data is was not passed though the Url
    if(!this.documentVariables) {
     await this.loadVariables();
    }

    // If documentVariables are empty go back to upload 
    if(this.documentVariables.length <= 0){
      this.snackBar.open('There was no keyword found in that document, please submit a new document.', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      this.router.navigate(['document-upload-anonymous']);
    }

    // Create variables to populate in the form
    for (const variable of this.documentVariables) {
      this.createVariablesFields(variable);
    }
  }

  async loadVariables(){
    this.document = await this.documentService.getDocumentByIdAnonymous(this.documentId);
    
    this.documentVariables = await this.documentService.getVariablesOfDocumentAnonymous(this.document.id) as string[];
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

      // get the document Name
      let documentName = this.documentUrlInfo?this.documentUrlInfo.fileName: this.document.name;

      this.documentService.fillAndDownloadDocumentAnonymous( this.documentId, this.fillForm.controls.documentVariables.value)     
      .pipe( finalize(() => {
        this.progressBarMode = '';
        this.fillForm.reset();
      }))
      .subscribe(httpResponse => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(httpResponse.body)
        a.href = objectUrl
        a.download = "DocumentChanged_" + documentName;
        a.click();
        URL.revokeObjectURL(objectUrl);
      },
      error => { 
        this.snackBar.open('Something when wrong, document was not process', 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      });
  }

  getPropertyName(obj){
    return Object.keys(obj)[0];
  }
}
