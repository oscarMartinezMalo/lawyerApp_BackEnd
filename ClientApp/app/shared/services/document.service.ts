import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'ClientApp/environments/environment';
import { Observable, throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { AppError } from '../errors/app-error';
import { UserExitsError } from '../errors/user-exits-error';
import { Client } from '../models/client.model';
import { DocumentFile } from '../models/document.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  readonly BASE_URL = `${environment.baseUrl}api/documents/`;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  downloadDocument(): Observable<Blob>{
    return this.http.get(this.BASE_URL, {
      responseType: 'blob'
    });
  }

  uploadDocument(fd: FormData){       
    return this.http.post(this.BASE_URL, fd, {
      responseType: 'text',
      reportProgress: true,
      observe: 'events'
    })
  }

  uploadDocumentAnonymous(fd: FormData){       
    return this.http.post(this.BASE_URL + "uploadFileAnonymous", fd, {
      responseType: 'text',
      reportProgress: true,
      observe: 'events'
    })
  }

 async getDocumentsListOfLawyer(){
    let documents = await this.http.get(this.BASE_URL + 'getAllDocumentsOfLawyer').
    pipe(take(1),
      catchError((error: Response) => {
        if(error.status === 400) {
          return throwError(new UserExitsError(error));
        }
        return throwError(new AppError(error));
      })).toPromise();

      return documents as DocumentFile[];
  }

  async getDocumentById(id:string){
    let document = await this.http.get(this.BASE_URL + 'getDocumentInfoById/' + id).
    pipe(take(1),
      catchError((error: Response) => {
        if(error.status === 400) {
          return throwError(new UserExitsError(error));
        }
        return throwError(new AppError(error));
      })).toPromise();
      return document as DocumentFile;
}

async getDocumentByIdAnonymous(id:string){
  let document = await this.http.get(this.BASE_URL + 'getDocumentInfoByIdAnonymous/' + id).
  pipe(take(1),
    catchError((error: Response) => {
      if(error.status === 400) {
        return throwError(new UserExitsError(error));
      }
      return throwError(new AppError(error));
    })).toPromise();
    return document as DocumentFile;
}

  downloadDocumentById(Id: number){
    let document = this.http.get(this.BASE_URL + 'GetDocumentById/' + Id, {
      responseType: 'blob', // Set the body as a blob object
      observe: 'response'  // Add the headers to the response
    }).
    pipe(take(1),
      catchError((error: Response) => {
        if(error.status === 400) {
          return throwError(new UserExitsError(error));
        }
        return throwError(new AppError(error));
      }));

    return document;
  }

  async deleteDocumentByFromUserId(id: number){
   return this.http.delete(this.BASE_URL + 'delete/' + id).
    pipe(take(1),
    catchError((error: Response) => {
      if(error.status === 400) {
        return throwError(new UserExitsError(error));
      }
      return throwError(new AppError(error));
    })).toPromise();    
  }

  getVariablesOfDocument(documentId: number){
    return this.http.get(this.BASE_URL + 'getVariablesOfDocument/' + documentId).
    pipe(take(1),
    catchError((error: Response) => {
      if(error.status === 400) {
        return throwError(new UserExitsError(error));
      }
      return throwError(new AppError(error));
    })).toPromise();  
  }

  getVariablesOfDocumentAnonymous(documentId: number){
    return this.http.get(this.BASE_URL + 'getVariablesOfDocumentAnonymous/' + documentId).
    pipe(take(1),
    catchError((error: Response) => {
      if(error.status === 400) {
        return throwError(new UserExitsError(error));
      }
      return throwError(new AppError(error));
    })).toPromise();  
  }

  fillAndDownloadDocument(documentId, variablesList: Object[]) {
    let document = this.http.post(this.BASE_URL + 'fillAndDownloadDocument/' + documentId,
     variablesList,
      {
      responseType: 'blob', // Set the body as a blob object
      observe: 'response'  // Add the headers to the response
    }).
    pipe(take(1),
      catchError((error: Response) => {
        return throwError(new AppError(error));
      }));

    return document;
  }

  fillAndDownloadDocumentAnonymous(documentId, variablesList: Object[]) {
    let document = this.http.post(this.BASE_URL + 'fillAndDownloadDocumentAnonymous/' + documentId,
     variablesList,
      {
      responseType: 'blob', // Set the body as a blob object
      observe: 'response'  // Add the headers to the response
    }).
    pipe(take(1),
      catchError((error: Response) => {
        return throwError(new AppError(error));
      }));

    return document;
  }
}
