import { Component, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AuthService } from 'ClientApp/app/shared/services/auth.service';
import { SharedService } from 'ClientApp/app/shared/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer') public drawer: MatSidenav;
  public toolbarColor = 'navbar-solid-color';
  urlIsHome: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Small])
      .pipe(map(result => result.matches));
  afAuth: any;

  userIsLawyerorAdmin = false;

  constructor(
      private breakpointObserver: BreakpointObserver,
      public authService: AuthService,      
        private scrollDispatcher: ScrollDispatcher,
        private zone: NgZone,
        private sharedService: SharedService
  ) {
    sharedService.isUrlHome$.subscribe(urlIsHome=>{
          this.urlIsHome = urlIsHome;
          if(urlIsHome) {
              this.toolbarColor = 'navbar-transparent';
          } else {
            this.toolbarColor = 'navbar-solid-color';
          }
    })
    
    this.scrollDispatcher.scrolled().subscribe((data: CdkScrollable) => {
      const scrollTop = data.getElementRef().nativeElement.scrollTop || 0;
      this.zone.run(() => { 
          this.toolbarColor = (scrollTop < 50 && this.urlIsHome ) ? 'navbar-transparent' : 'navbar-solid-color'; });
      })
   }

  public async ngOnInit() {
      this.drawerClose();
      this.isAdminOrLawyer();
  }

  public drawerClose(): void {
      this.isHandset$.subscribe(isHandset => {
          if (isHandset) {
              this.drawer?.toggle(false);
          }
      });
  }

  isAdminOrLawyer(){
    this.authService.user$
    .pipe(
      map(user => {
        return this.authService.canReadClients(user) ? true : false;
      })     
    ).subscribe(result =>{
      return this.userIsLawyerorAdmin = result });
  }
}
