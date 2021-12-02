import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { HttpErrorService } from '../errors/http-error.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private httpErrorService: HttpErrorService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.getUser().pipe(
        map(user => user && user.roles.find(u => u.name == 'Admin') ? true : false),
        tap(isAdmin => {
          if(!isAdmin) {
            this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
            this.httpErrorService.displayError('You dont have access, please login as Admin');
          }
        })
      );
  }  
}
