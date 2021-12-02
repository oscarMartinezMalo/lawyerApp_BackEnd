import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isUrlHome$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor() {
   }
}
