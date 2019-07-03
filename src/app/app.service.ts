import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './github.api.interface';
import { Router } from '@angular/router';
import { Repos } from './github.api.repos.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public user$: Profile | Object;
  public repos$: Repos | [];
  public errorAlert: boolean = false;
  public errorLoad: boolean = true;
  public errorClose;

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = {};
    this.repos$ = [];
  }

  public setUser(user) {
    this.getUsers(user).subscribe((user$: Profile) => {
      this.errorLoad = false;
      console.log("from setUser: " + this.errorLoad);
      this.user$ = user$;
    },
    // Error Handling
    (err) => {
      this.errorLoad = true;
      console.log("from setUser Error: " + this.errorLoad);
      this.errorAlert = true;
      this.user$ = {};
      this.repos$ = [];

      clearTimeout(this.errorClose);
      this.errorClose = setTimeout(() => {
        this.errorAlertClose();
      }, 5000);
    },
    // Navigate based on if error
    () => {
      if (!this.errorLoad) {
        this.router.navigate(['profile']);
      }
    });
  }

  public getUsers(user): Observable<Profile> {
    return this.http.get<Profile>("https://api.github.com/users/" + user);
  }

  public getRepos(user): Observable<Repos> {
    return this.http.get<Repos>("https://api.github.com/users/" + user + "/repos");
  }

  public errorAlertClose(): void {
    this.errorAlert = false;
    clearTimeout(this.errorClose);
  }

}
