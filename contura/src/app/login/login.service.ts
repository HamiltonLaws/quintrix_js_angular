import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logedIn = false;

  constructor() { }

  logIn(){
    this.logedIn = true;
    //return this.logedIn
  }

  logOut(){
    this.logedIn = false;
    return this.logedIn
  }
  getLogin(){
    return this.logedIn
  }
}
