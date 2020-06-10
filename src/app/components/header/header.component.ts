import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) {
  }

  logoutUser() {
    console.log('Logout User');
    return this.authService.logoutUser();
  }

  ngOnInit(): void {
  }
}
