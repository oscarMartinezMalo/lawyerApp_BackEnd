import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogCustomComponent, DialogData } from 'ClientApp/app/shared/components/dialog-custom/dialog-custom.component';
import { Case } from 'ClientApp/app/shared/models/case.model';
import { CasesService } from 'ClientApp/app/shared/services/cases.service';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {
  displayedColumns: string[] = ['caseNumber', 'type', 'createdDate', 'clientName', 'delete'];

  public dataSource;
  
  constructor(
    private casesService: CasesService,
    private dialog: MatDialog,
    private router: Router
  ) { 
    this.dataSource = new MatTableDataSource<Case>()
  }

  async ngOnInit() {
    this.dataSource.data  = await this.casesService.getCaseListOfLawyer();
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(row) {
    console.log(row);
    this.router.navigate(['cases', row.id]);
  }

  async onDelete($event, caseToDelete: Case){
    $event.stopPropagation();
    
    const dialogData = new DialogData('Confirm Action', `Are you sure you want to delete the case number ${caseToDelete.caseNumber}`);
    const dialogRef = this.dialog.open(DialogCustomComponent, { maxWidth: '500px', data: dialogData });

    dialogRef.afterClosed().subscribe(async dialogResult => {
      if (dialogResult) {
        await this.casesService.deleteCaseFromLawyer(caseToDelete.id);
        const index = this.dataSource.data.indexOf(caseToDelete);

        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      }});
  }
}
