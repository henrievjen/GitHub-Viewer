import { Component, OnInit } from '@angular/core';
import { Profile } from '../github.api.interface';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

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
  }

  public validation(): void {
    if ((<HTMLInputElement> document.getElementById('username')).value.trim().length > 0) {
      this.appService.setUser((<HTMLInputElement> document.getElementById('username')).value);
      sessionStorage.setItem('username', (<HTMLInputElement> document.getElementById('username')).value);
      this.router.navigate(['profile']);
    }
  }
}
