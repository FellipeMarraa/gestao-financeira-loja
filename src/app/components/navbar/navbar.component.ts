import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dropMenu: boolean = false;

  openDropMenu(){
    this.dropMenu = !this.dropMenu;
  }

  protected readonly onclick = onclick;
}
