import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogData, DialogCustomComponent } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { Client } from 'ClientApp/app/shared/models/client.model';
import { ClientsService } from 'ClientApp/app/shared/services/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phone', 'delete'];

  public dataSource;

  constructor(
    private clientsService: ClientsService,
    private dialog: MatDialog,
    private router: Router
  ) { 
    this.dataSource = new MatTableDataSource<Client>()
  }

  async ngOnInit(): Promise<void> {
    this.dataSource.data  = await this.clientsService.getClientListOfLawyer();
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(row) {
    this.router.navigate(['clients', row.id]);
  }

  async onDelete($event,clientToDelete: Client){
    $event.stopPropagation();
    const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the Client ${clientToDelete.firstName} ${clientToDelete.lastName}`);
    const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });

    dialogRef.afterClosed().subscribe(async dialogResult => {
      if (dialogResult) {
        await this.clientsService.deleteClientFromLawyer(clientToDelete.id);
        const index = this.dataSource.data.indexOf(clientToDelete);
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      }});
  }
}
