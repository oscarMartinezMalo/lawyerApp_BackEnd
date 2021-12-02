import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'ClientApp/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {  

  constructor(private sharedService : SharedService) {
   }
  
  ngOnInit(): void {    
    this.sharedService.isUrlHome$.next(true);
  }

  ngOnDestroy(): void {
    this.sharedService.isUrlHome$.next(false);
  }

  onScrollClick(scrollElement, valueToScroll){
    scrollElement.scrollTo({ left: ( valueToScroll), behavior: 'smooth' });
  }
}
