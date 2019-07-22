import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './github.api.interface';
import { Router } from '@angular/router';
import { Repos } from './github.api.repos.interface';
import { UserList } from './github.api.users.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public user$: Profile | object;
  public repos$: Repos | [];
  public followers$: UserList | [];
  public following$: UserList | [];
  public errorAlert = false;
  public errorLoad = true;
  public errorClose;
  public pageNumber = 1;
  public repoPages = 1;
  public followerPageNumber = 1;
  public followerPages = 1;
  public followingPageNumber = 1;
  public followingPages = 1;

  // Show More  -  Show Less button
  public infoClass: string;
  public showInfoState: boolean;
  public showInfoMessage: string;

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = {};
    this.repos$ = [];
    this.followers$ = [];
    this.following$ = [];
    this.pageNumber = 1;
    this.repoPages = 1;
    this.followerPageNumber = 1;
    this.followerPages = 1;
    this.followingPageNumber = 1;
    this.followingPages = 1;
  }

  public setUser(user) {
    this.getUsers(user).subscribe((user$: Profile) => {
      this.errorLoad = false;
      this.user$ = user$;
    },
    // Error Handling
    (err) => {
      this.errorLoad = true;
      this.errorAlert = true;
      this.user$ = {};
      this.repos$ = [];

      clearTimeout(this.errorClose);
      this.errorClose = setTimeout(() => {
        this.errorAlertClose();
      }, 5000);

      if (this.errorLoad) {
        this.router.navigate(['home']);
      }
    },
    // Navigate based on if there is an error
    () => {
      if (!this.errorLoad) {
        this.router.navigate(['profile']);
      }
    });
  }

  public getUsers(user): Observable<Profile> {
    return this.http.get<Profile>('https://api.github.com/users/' + user);
  }

  public getRepos(user, page: number): Observable<Repos> {
    return this.http.get<Repos>('https://api.github.com/users/' + user + '/repos?page=' + page + '&per_page=100');
  }

  public getFollowers(user, page: number): Observable<UserList> {
    return this.http.get<UserList>('https://api.github.com/users/' + user + '/followers?page=' + page + '&per_page=21');
  }

  public getFollowing(user, page: number): Observable<UserList> {
    return this.http.get<UserList>('https://api.github.com/users/' + user + '/following?page=' + page + '&per_page=21');
  }

  public errorAlertClose(): void {
    this.errorAlert = false;
    clearTimeout(this.errorClose);
  }

  public navbarViewingPlaceholder(): void {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('username').length > 0) {
      (<HTMLInputElement> document.getElementById('navbar-username')).placeholder = 'Viewing: ' + sessionStorage.getItem('username');
      (<HTMLInputElement> document.getElementById('navbar-username')).value = '';
    }
  }

}
