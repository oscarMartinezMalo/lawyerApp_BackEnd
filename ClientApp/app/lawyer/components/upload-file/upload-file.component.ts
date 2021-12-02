import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'ClientApp/environments/environment';
import { AuthService } from '../../../shared/services/auth.service';
import { DocumentService } from '../../../shared/services/document.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  
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
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  
  onFileSelected(event) {
    this.progressBarValue = 0;
    this.fileUploadedMessage = 'noShow';

    this.selectedFile = <File>event.target.files[0];
    this.fileSelectedName = this.selectedFile.name;
    this.showSpinner = false;
    
    this.fileInput.nativeElement.value = ''; // Reset File Input to allow the submittion of the same file multiple times
  }

  onUpload() {
    if (!this.selectedFile) {
      this.snackBar.open(`You have to pick a document`, 'X', { duration: 20000, panelClass: ['red-snackbar'] });
      return;
    } 
    
    const fd = new FormData();
    fd.append('document', this.selectedFile);
    this.uploadDocumentWithUser(fd);
  }

  private uploadDocumentWithUser(fd){
    this.documentService.uploadDocument(fd)
    .subscribe(
      event => {
        if( event.type == HttpEventType.UploadProgress){
          this.progressBarValue = Math.round(event.loaded/ event.total * 100 );
        } 
        else if (event.type == HttpEventType.Response){
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
