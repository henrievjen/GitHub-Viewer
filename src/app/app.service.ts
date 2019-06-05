import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Profile } from './github.api.interface';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(user): Observable<Profile> {
    return this.http.get<Profile>("https://api.github.com/users/" + user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError("An error occurred.")
  }

  public user$: Profile | Object = {};

}
