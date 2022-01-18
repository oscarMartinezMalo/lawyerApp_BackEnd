import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { take, catchError, map, tap } from 'rxjs/operators';
import { environment } from 'ClientApp/environments/environment';
import { AppError } from '../errors/app-error';
import { UserExitsError } from '../errors/user-exits-error';
import { Client } from '../models/client.model';
import { SaveClient } from '../models/save-client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  readonly BASE_URL = `${environment.baseUrl}api/clients/`;
  opts= [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  // This is for the Client autoComplete int the add new case view
  getClientsByQueryObservable(clientNameQuery: string): Observable<Client[]>{
    const params = new HttpParams({fromString: `query=${clientNameQuery}`});
    return this.http.get(this.BASE_URL + 'getClientsByQuery', { params }) as Observable<Client[]>;
  }

  async getClientListOfLawyer(){
    let clients = await this.http.get(this.BASE_URL + 'getAllClientsOfaLawyer').
    pipe(take(1),
      catchError((error: Response) => {
        if(error.status === 400) {
          return throwError(new UserExitsError(error));
        }
        return throwError(new AppError(error));
      })).toPromise();

      return clients as Client[];
  }

  async getClientById(Id: string): Promise<Client> {
    let client = await this.http.get(this.BASE_URL +"getClientById/" + Id).
    pipe(take(1),
      catchError((error: Response) => {
        if(error.status === 400) {
          return throwError(new UserExitsError(error));
        }
        return throwError(new AppError(error));
      })).toPromise();

    return client as Client;
  }

  async saveClient(newClient: SaveClient){
    await this.http.post(this.BASE_URL +'saveClient' , newClient).
    pipe(take(1),
    catchError((error: Response) => {
      if(error.status === 400) {
        return throwError(new UserExitsError(error));
      }
      return throwError(new AppError(error));
    })).toPromise();
  }

  async updateClient(clientIdUrl: string, clientForm: SaveClient) {
    await this.http.put(this.BASE_URL +'updateClient/' + clientIdUrl , clientForm).
    pipe(take(1),
    catchError((error: Response) => {
      if(error.status === 400) {
        return throwError(new UserExitsError(error));
      }
      return throwError(new AppError(error));
    })).toPromise();
  }

  async deleteClientFromLawyer(clientId: number){
    await this.http.delete(this.BASE_URL + 'delete/' + clientId).
    pipe(take(1),
    catchError((error: Response) => {
      return throwError(new AppError(error));
    })).toPromise();
  }
}
