import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Profile } from '../github.api.interface';
import { UserList } from '../github.api.users.interface';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    document.getElementById('home-navbar').classList.remove('active');
    document.getElementById('profile-navbar').classList.remove('active');
    document.getElementById('repositories-navbar').classList.remove('active');

    if (sessionStorage.getItem('username') !== null) {
      this.appService.getUsers(sessionStorage.getItem('username')).subscribe((user$: Profile) => {
        this.appService.user$ = user$;
        this.appService.followerPages = Math.ceil(user$.followers / 21);
        this.appService.navbarViewingPlaceholder();
      });

      this.appService.getFollowers(sessionStorage.getItem('username'), this.appService.followerPageNumber).subscribe((follower$: UserList) => {
        this.appService.followers$ = follower$;

        for(let i = 0; i < (follower$.length); i++) {
          this.appService.getUsers(follower$[i].login).subscribe((user$: Profile) => {
            this.appService.followers$[i] = user$;
          });
        }

        if (document.getElementsByClassName('followerPageBtnGroup')[0].children[this.appService.followerPageNumber - 1]) {
          document.getElementsByClassName('followerPageBtnGroup')[0].children[this.appService.followerPageNumber - 1].classList.add('active');
        }

        if (document.getElementsByClassName('followerPageBtnGroup')[1].children[this.appService.followerPageNumber - 1]) {
          document.getElementsByClassName('followerPageBtnGroup')[1].children[this.appService.followerPageNumber - 1].classList.add('active');
        }
      });

      if (this.appService.errorLoad) {
        (<HTMLInputElement> document.getElementById('navbar-username')).placeholder = 'Search Users';
      } else {
        this.appService.navbarViewingPlaceholder();
      }
    }
    
  }

  public validation(user: string): void {
    this.appService.setUser(user);
    sessionStorage.setItem('username', user);

    // Resets Page Numbers
    this.appService.pageNumber = 1;
    this.appService.followerPageNumber = 1;
    this.appService.followingPageNumber = 1;
  }

  public setPageNumber(num: number): void {
    this.appService.followerPageNumber = num;
    this.ngOnInit();
  }

  public setBtnState(num): void {
    const children1 = document.getElementsByClassName('followerPageBtnGroup')[0].children;
    const children2 = document.getElementsByClassName('followerPageBtnGroup')[1].children;

    for (let i = 0; i < children1.length; i++) {
      (<HTMLElement> children1[i]).classList.remove('active');
    }

    for (let i = 0; i < children2.length; i++) {
      (<HTMLElement> children2[i]).classList.remove('active');
    }
  }

}
