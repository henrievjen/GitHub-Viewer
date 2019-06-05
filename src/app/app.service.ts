import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Profile } from './github.api.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Profile> {
    return this.http.get<Profile>("https://api.github.com/users/henrievjen").pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError("An error occurred.")
  }

}
