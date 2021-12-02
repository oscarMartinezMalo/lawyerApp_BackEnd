import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'ClientApp/environments/environment';
import { throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { AppError } from '../errors/app-error';
import { UserExitsError } from '../errors/user-exits-error';
import { Case } from '../models/case.model';
import { SaveCase } from '../models/save-case.model';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  readonly BASE_URL = `${environment.baseUrl}api/cases/`;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

    async getCaseListOfLawyer(): Promise<Case[]>{
     let cases = await this.http.get(this.BASE_URL).
      pipe(take(1),
        catchError((error: Response) => {
          if(error.status === 400) {
            return throwError(new UserExitsError(error));
          }
          return throwError(new AppError(error));
        })).toPromise();

        return cases as Case[];
    }

    async getCaseById(Id: string): Promise<Case> {
      let caseByID = await this.http.get(this.BASE_URL + Id).
      pipe(take(1),
        catchError((error: Response) => {
          if(error.status === 400) {
            return throwError(new UserExitsError(error));
          }
          return throwError(new AppError(error));
        })).toPromise();

      return caseByID as Case;
    }

    async saveCase(newCase: SaveCase){
      await this.http.post(this.BASE_URL , newCase).
        pipe(take(1),
        catchError((error: Response) => {
          if(error.status === 400) {
            return throwError(new UserExitsError(error));
          }
          return throwError(new AppError(error));
        })).toPromise();
    }

    async updateCase(caseId: string, editCase: SaveCase){
      await this.http.put(this.BASE_URL + caseId , editCase).
        pipe(take(1),
        catchError((error: Response) => {
          if(error.status === 400) {
            return throwError(new UserExitsError(error));
          }
          return throwError(new AppError(error));
        })).toPromise();
    }

    async deleteCaseFromLawyer(caseId: number){
      await this.http.delete(this.BASE_URL + caseId).
      pipe(take(1),
      catchError((error: Response) => {
        return throwError(new AppError(error));
      })).toPromise();
    }
}
