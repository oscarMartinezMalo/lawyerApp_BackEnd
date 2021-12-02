import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { HttpErrorService } from '../errors/http-error.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private httpErrorService: HttpErrorService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.authService.getUser().pipe(map(user => {
      if (user) { return true; }

      this.authService.logOut();
      this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });

      this.httpErrorService.displayError();
      return false;
    }));
  }
}