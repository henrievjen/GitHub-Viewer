import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Profile } from '../github.api.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.infoClass = 'fa fa-caret-down';
    this.appService.showInfoState = false;
    this.appService.showInfoMessage = 'Show More';
  }

  ngOnInit(): void {
    document.getElementById('profile-navbar').classList.add('active');
    document.getElementById('home-navbar').classList.remove('active');
    document.getElementById('repositories-navbar').classList.remove('active');

    if (sessionStorage.getItem('username') !== null) {
      this.appService.getUsers(sessionStorage.getItem('username')).subscribe((user$: Profile) => {
        this.appService.user$ = user$;
        this.appService.navbarViewingPlaceholder();
      });

      if (this.appService.errorLoad) {
        (<HTMLInputElement> document.getElementById('navbar-username')).placeholder = 'Search Users';
      } else {
        this.appService.navbarViewingPlaceholder();
      }
    }

    this.appService.errorAlertClose();
  }

  public showInfo(): void {
    if (this.appService.infoClass === 'fa fa-caret-down') {
      this.appService.infoClass = 'fa fa-caret-up';
      this.appService.showInfoState = true;
      this.appService.showInfoMessage = 'Show Less';
    } else {
      this.appService.infoClass = 'fa fa-caret-down';
      this.appService.showInfoState = false;
      this.appService.showInfoMessage = 'Show More';
    }
  }

}
