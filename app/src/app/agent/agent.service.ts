
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  rootURL = 'http://localhost:8080'

  getAgents():Observable<Agent[]> {
    //console.log(this.rootURL);
    return this.http.get<Agent[]>(this.rootURL+'/agents');
  }

}
