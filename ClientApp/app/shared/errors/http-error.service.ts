import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(
    private snackBar: MatSnackBar,
    ) { }

  displayError(message?: string) {
    this.openPopUp(message);
  }

  async openPopUp(message?: string) {
    let defaultMessage = message? message : 'To Access, please Login!!!';
    this.snackBar.open(defaultMessage , 'X', { duration: 10000, panelClass: ['red-snackbar'] });
  }
}
