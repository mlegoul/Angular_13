import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  validLoginUser() {
    return this.snackBar.open('Connexion OK !', 'Fermer', {
      duration: 2500,
      verticalPosition: 'top',
    });
  }

  validSignUpUser() {
    return this.snackBar.open('Compte créer !', 'Fermer', {
      duration: 2500,
      verticalPosition: 'top',
    });
  }

  noValidLogin() {
    return this.snackBar.open('Erreur ! Authentification impossible.', 'Fermer', {
      duration: 2500,
      verticalPosition: 'top',
    });
  }
}
