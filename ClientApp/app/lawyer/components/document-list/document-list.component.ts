import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { Client } from 'ClientApp/app/shared/models/client.model';
import { DocumentFile } from 'ClientApp/app/shared/models/document.model';
import { ClientsService } from 'ClientApp/app/shared/services/clients.service';
import { DocumentService } from 'ClientApp/app/shared/services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'dateCreated', 'size', 'fill', 'download', 'delete'];
  variablesOfDocument: string[] = [];

  public dataSource;

  constructor(
    private documentService: DocumentService,
    private dialog: MatDialog,
    private router: Router
  ) { 
    this.dataSource = new MatTableDataSource<Client>()
  }

  async ngOnInit(): Promise<void> {
    this.dataSource.data  = await this.documentService.getDocumentsListOfLawyer();
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(row) {
    // this.router.navigate(['document-upload']);
  }

  async onDownload($event,documentToDownload: DocumentFile){
    $event.stopPropagation();

    this.documentService
    .downloadDocumentById( documentToDownload.id )
    .subscribe(httpResponse => {
      const a = document.createElement('a')
      const objectUrl = URL.createObjectURL(httpResponse.body)
      a.href = objectUrl
      a.download = documentToDownload.name;
      a.click();
      URL.revokeObjectURL(objectUrl);
    })
  }

  async onDelete($event,documentToDelete: DocumentFile){
    $event.stopPropagation();
    const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the Document ${documentToDelete.name}`);
    const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });

    dialogRef.afterClosed().subscribe(async dialogResult => {
      if (dialogResult) {
        await this.documentService.deleteDocumentByFromUserId(documentToDelete.id);
        const index = this.dataSource.data.indexOf(documentToDelete);
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      }});
  }

  async onFill($event, documentToFill: DocumentFile) {
    this.router.navigate(['document-form-fill/', documentToFill.id]);
  }

}
