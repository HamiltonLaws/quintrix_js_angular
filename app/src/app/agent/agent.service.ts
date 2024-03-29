
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Agent{
  id :number;
  name : string;
  email : string;
  gender : string;
  status : string;
}

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8080';

  getAgents():Observable<Agent[]> {
    //console.log(this.rootURL);
    return this.http.get<Agent[]>(this.rootURL+'/agents').pipe(
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
