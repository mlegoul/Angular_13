import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  constructor(
    private sidenav: MatSidenav,
  ) {
  }

  openDrawer() {
    return this.sidenav.open();
  }
}
