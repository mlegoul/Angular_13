import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MatDrawer, MatDrawerMode} from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatDrawer;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  async logoutUser(): Promise<void> {
    await this.sidenav.close();
    this.authService.logoutUser();
  }

}
