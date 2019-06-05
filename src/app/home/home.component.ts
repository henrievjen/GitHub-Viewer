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

  ngOnInit(): void { }

  public user$: Profile | Object = {};

  private setUser(user) {
    this.appService.getUsers(user).subscribe((user$: Profile) => {
      this.user$ = user$;
    });
  }

  public validation(): void {
    if ((<HTMLInputElement> document.getElementById('username')).value.trim().length > 0) {
      this.setUser((<HTMLInputElement> document.getElementById('username')).value);
      this.router.navigate(['profile']);
    }
  }
}