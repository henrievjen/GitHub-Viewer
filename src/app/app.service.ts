import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Profile } from './github.api.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router: Router) { }

  public setUser(user) {
    this.getUsers(user).subscribe((user$: Profile) => {
      this.user$ = user$;
    });
  }

  getUsers(user): Observable<Profile> {
    return this.http.get<Profile>("https://api.github.com/users/" + user);
  }

  public user$: Profile | Object = {};

}
