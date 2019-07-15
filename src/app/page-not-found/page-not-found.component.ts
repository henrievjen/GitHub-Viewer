import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    sessionStorage.clear();
    document.getElementById('home-navbar').classList.remove('active');
    document.getElementById('profile-navbar').classList.remove('active');
    document.getElementById('repositories-navbar').classList.remove('active');

    (<HTMLInputElement> document.getElementById('navbar-username')).placeholder = 'Search Users';
  }

  public validation(): void {
    if ((<HTMLInputElement> document.getElementById('username')).value.trim().length > 0) {
      this.appService.setUser((<HTMLInputElement> document.getElementById('username')).value);
      sessionStorage.setItem('username', (<HTMLInputElement> document.getElementById('username')).value);
      (<HTMLInputElement> document.getElementById('username')).value = "";
    }
  }

}
