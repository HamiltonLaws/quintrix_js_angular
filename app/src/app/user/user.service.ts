import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface User{
  id:number;
  name:string;
  phone:string;
  email:string;
  active:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8080';

  getUsers():Observable<User[]> {
    //console.log(this.rootURL);
    return this.http.get<User[]>(this.rootURL+'/users').pipe(
      catchError(this.handleError)
    );
  }

  postUsers(user:User):Observable<User>{
    return this.http.post<User>(this.rootURL+'/users',user).pipe(
      catchError(this.handleError)
      );

  }

  private handleError(error: HttpErrorResponse) {
    let errormessage = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        errormessage = `Backend returned code ${error.status}, body was: `, error.error;
    }
    // Return an observable with a user-facing error message.
    errormessage+= 'Something bad happened; please try again later.';
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
