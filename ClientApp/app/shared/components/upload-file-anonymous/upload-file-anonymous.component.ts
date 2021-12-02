import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'ClientApp/environments/environment';
import { FileIdFileVariables } from '../../models/fileIdFileVariables.model';
import { AuthService } from '../../services/auth.service';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-upload-file-anonymous',
  templateUrl: './upload-file-anonymous.component.html',
  styleUrls: ['./upload-file-anonymous.component.scss']
})
export class UploadFileAnonymousComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  selectedFile: File = null;
  fileSelectedName = '';
  fileUploadedMessage: string = 'noShow';
  showSpinner: boolean = false;

  //// Prgress Bar configuration
  progressBarValue = 0;
  mode: ProgressBarMode = 'determinate';
  color: ThemePalette = 'primary';
  /////

  readonly BASE_URL = `${environment.baseUrl}api/documents/`;

  constructor( 
    private documentService: DocumentService,    
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }
  
  onFileSelected(event) {
    this.progressBarValue = 0;
    this.fileUploadedMessage = 'noShow';

    if(
      // (<File>event.target.files[0]).type != "text/plain" &&
     (<File>event.target.files[0]).type != "application/msword" && (<File>event.target.files[0]).type != "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      this.snackBar.open(`File extensions allow (.doc, .docx)`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      this.showSpinner = false;
      return;
    }

    this.selectedFile = <File>event.target.files[0];

    this.fileSelectedName = this.selectedFile.name;
    this.showSpinner = false;
    
    this.fileInput.nativeElement.value = ''; // Reset File Input to allow the submittion of the same file multiple times
  }

  onInitialize() {
    // When user doesn't select anything(cancel) do not shot the spinner
    // window.onfocus = this.onFileCancel;
  }

  onUpload() {
    if (!this.selectedFile) {
      this.snackBar.open(`You have to pick a document`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      return;
    } 
    
    const fd = new FormData();
    fd.append('document', this.selectedFile);

    this.uploadDocumentAnonymous(fd); 
  }

  private uploadDocumentAnonymous(fd){
    this.documentService.uploadDocumentAnonymous(fd)
    .subscribe(
      (event) => {
        if( event.type == HttpEventType.UploadProgress){
          this.progressBarValue = Math.round(event.loaded/ event.total * 100 );
        } 
        else if (event.type == HttpEventType.Response){  // The Final response
          
          let fileIdFileVariables = JSON.parse(event.body) as FileIdFileVariables;

          let documentRoute = '/document-form-fill-anonymous/' + fileIdFileVariables.fileId;
          this.router.navigate([documentRoute], { state: {fileName: this.fileSelectedName, fileVariables: fileIdFileVariables.fileVariables} });

          this.onRemoveDocument();
          this.fileUploadedMessage = 'showSuccess';
        } 
      },
      error => {
        this.fileUploadedMessage = 'showError';
        this.progressBarValue = 0;
      }
    )
  }

  onRemoveDocument() {
    this.fileUploadedMessage = 'noShow';
    this.progressBarValue = 0;
    this.selectedFile = null;
    this.fileSelectedName = '';
  }
}
