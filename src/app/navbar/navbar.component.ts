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

  ngOnInit() { }

  public validation(): void {
    if ((<HTMLInputElement> document.getElementById('navbar-username')).value.trim().length > 0) {
      this.appService.setUser((<HTMLInputElement> document.getElementById('navbar-username')).value);
      sessionStorage.setItem('username', (<HTMLInputElement> document.getElementById('navbar-username')).value);
      this.router.navigate(['profile']);

      (<HTMLInputElement> document.getElementById('navbar-username')).value = "";
    }
  }

}
