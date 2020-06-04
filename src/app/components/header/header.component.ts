import {Component, OnInit} from '@angular/core';
import {SideNavModel} from '../../interfaces/sideNav-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listInputsForMenu: string[];

  checkList: Map<string, SideNavModel> = new Map()
    .set('home', {
      title: 'HOME',
      display: 'home',
      router: '/',
      ariaLabel: 'Example home icon',
    })
    .set('logout', {
      title: 'Me déconnecter',
      display: 'exit_to_app',
      ariaLabel: 'Example home icon',
    })

  constructor() {
  }

  ngOnInit(): void {
    this.listInputsForMenu = Array.from(this.checkList.keys());
  }

}
