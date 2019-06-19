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
  public repos$: Repos | Object;

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = {};
    this.repos$ = {};
  }

  public setUser(user) {
    this.getUsers(user).subscribe((user$: Profile) => {
      this.user$ = user$;
    });
  }

  getUsers(user): Observable<Profile> {
    return this.http.get<Profile>("https://api.github.com/users/" + user);
  }

  getRepos(user): Observable<Repos> {
    return this.http.get<Repos>("https://api.github.com/users/" + user + "/repos");
  }

}
