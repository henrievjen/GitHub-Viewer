import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Profile } from '../github.api.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    document.getElementById('home-navbar').classList.add("active");
    document.getElementById('profile-navbar').classList.remove("active");
    document.getElementById('repositories-navbar').classList.remove("active");

    (<HTMLInputElement> document.getElementById('navbar-username')).placeholder = "Search Users";

    if (sessionStorage.getItem('username') !== null) {
      this.appService.getUsers(sessionStorage.getItem('username')).subscribe((user$: Profile) => {
        this.appService.user$ = user$;
      });
    }
  }

  public validation(): void {
    if ((<HTMLInputElement> document.getElementById('username')).value.trim().length > 0) {
      this.appService.setUser((<HTMLInputElement> document.getElementById('username')).value);
      sessionStorage.setItem('username', (<HTMLInputElement> document.getElementById('username')).value);
      this.router.navigate(['profile']);
    }
  }
}
