import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.navbarViewingPlaceholder();
  }

  public validation(): void {
    if ((<HTMLInputElement> document.getElementById('navbar-username')).value.trim().length > 0) {
      this.appService.setUser((<HTMLInputElement> document.getElementById('navbar-username')).value);
      sessionStorage.setItem('username', (<HTMLInputElement> document.getElementById('navbar-username')).value);
      (<HTMLInputElement> document.getElementById('navbar-username')).value = '';
      this.appService.navbarViewingPlaceholder();
    }
  }

  public collapseNavBar(): void {
    if ((<HTMLButtonElement> document.getElementsByClassName('navbar-toggler')[0]).getAttribute('aria-expanded') === 'true') {
      (<HTMLButtonElement> document.getElementsByClassName('navbar-toggler')[0]).click();
    }
  }

  public navbarHomePlaceholder(): void {
    (<HTMLInputElement> document.getElementById('navbar-username')).placeholder = 'Search Users';
  }

  public navbarViewingPlaceholder(): void {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('username').length > 0) {
      (<HTMLInputElement> document.getElementById('navbar-username')).placeholder = 'Viewing: ' + sessionStorage.getItem('username');
      (<HTMLInputElement> document.getElementById('navbar-username')).value = '';
    }
  }
}
