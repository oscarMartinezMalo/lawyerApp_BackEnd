import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "ClientApp/environments/environment";
import { Observable, throwError } from "rxjs";
import { take, catchError } from "rxjs/operators";
import { AppError } from "../errors/app-error";
import { RoleExitsError } from "../errors/role-exist-error";
import { UserExitsError } from "../errors/user-exits-error";
import { Case } from "../models/case.model";
import { User } from "../models/user.model";

interface Role {
    id: string;
    name: string;
    users: User[];
  }

@Injectable({
    providedIn: 'root'
  })
  export class AdminService {
    readonly BASE_URL = `${environment.baseUrl}api/account/`;
  
    constructor(
      private http: HttpClient,
      private route: ActivatedRoute,
      private router: Router,
      private snackBar: MatSnackBar
    ) { }

    async getRoleList(): Promise<Role[]>{
      let roles = await this.http.get(this.BASE_URL + "roles").
        pipe(take(1),
          catchError((error: Response) => {
            if(error.status === 400) {
              return throwError(new UserExitsError(error));
            }
            return throwError(new AppError(error));
          })).toPromise();
  
        return roles as Role[];
      }
 
    async getRolesOfUser(userId: string):  Promise<User> {
        let user = await this.http.get(this.BASE_URL + "getUser/" + userId).
        pipe(take(1),
          catchError((error: Response) => {
            if(error.status === 400) {
              return throwError(new UserExitsError(error));
            }
            return throwError(new AppError(error));
          })).toPromise();
  
        return user  as User;
    }

    async addRole(role: Role){
      return await this.http.post(this.BASE_URL + 'addRole', role).
      pipe(take(1),
      catchError((error:Response) => {
        return throwError(new AppError(error));
      })).toPromise();
    }

    async deleteRoleById( roleId: string) {
      return await this.http.delete(this.BASE_URL + 'deleteRole/' + roleId).
      pipe(take(1),
      catchError((error:Response) => {
        return throwError(new AppError(error));
      })).toPromise();
    }
      
    async deleteRoleFromUser(userId: string, roleId: string) {
      return await this.http.post(this.BASE_URL + 'deleteUserfromRole/', {userId, roleId}).
      pipe(take(1),
      catchError((error:Response) => {
        return throwError(new AppError(error));
      })).toPromise();
    }

    async getAllUsers() {
      let users = await this.http.get(this.BASE_URL + "users").
      pipe(take(1),
        catchError((error: Response) => {
          if(error.status === 400) {
            return throwError(new UserExitsError(error));
          }
          return throwError(new AppError(error));
        })).toPromise();

        return users as User[];
    }

    getAllUsersByQuery(userNameQuery: string): Observable<User[]> {
      const params = new HttpParams({fromString: `query=${userNameQuery}`});
      return this.http.get(this.BASE_URL + 'getAllUsersByQuery', { params }) as Observable<User[]>;
    }

    getAllRolesByQuery(roleNameQuery: string): Observable<Role[]> {
      const params = new HttpParams({fromString: `query=${roleNameQuery}`});
      return this.http.get(this.BASE_URL + 'getAllRolesByQuery', { params }) as Observable<Role[]>;
    }

    async deleteUser(userId: string){
      return await this.http.delete(this.BASE_URL + 'deleteUser/' + userId).
      pipe(take(1),
      catchError((error:Response) => {
        return throwError(new AppError(error));
      })).toPromise();
    }
  
    async getRoleById(Id: string) {
      let role = await this.http.get(this.BASE_URL +"getRoleById/" + Id).
      pipe(take(1),
        catchError((error: Response) => {  
          this.router.navigate(['roles']);
          return throwError(new AppError(error));
        })).toPromise();
  
      return role as Role;
    }
     
    async updateRole(roleIdUrl: string, roleForm: Role) {
      let result = await this.http.put(this.BASE_URL +'updateRole/' + roleIdUrl , roleForm).
      pipe(take(1),
      catchError((error:Response) => {
        return throwError(new AppError(error));
      })).toPromise();

      return result;
    }
   
    async deleteUserFromRole(userId: string, roleId: string) {
      let result = await this.http.post(this.BASE_URL +'deleteUserfromRole/', {userId, roleId}).
      pipe(take(1),
      catchError((error:Response) => {
        return throwError(new AppError(error));
      })).toPromise();

      return result;
    }
    
    async addUserToRole(userId: string, roleId: string) {
      let result = await this.http.post(this.BASE_URL +'addUserToRole/', {userId, roleId}).
      pipe(take(1),
      catchError((error:Response) => {
        if(error.status === 400) {
          return throwError(new RoleExitsError(error));
        }
        return throwError(new AppError(error));
      })).toPromise();

      return result;
    }

    async addRoleToUser(userId: string, roleId: string) {
      let result = await this.http.post(this.BASE_URL +'addRoleToUser/', {userId, roleId}).
      pipe(take(1),
      catchError((error:Response) => {
        if(error.status === 400) {
          return throwError(new RoleExitsError(error));
        }
        return throwError(new AppError(error));
      })).toPromise();

      return result;
    }
}  