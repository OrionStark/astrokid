import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class UsersService {
  private userURI = '/api/users';
  private isUserLogedIn: boolean;
  private userData: any;
  constructor(private http : Http) { }

  create(user: User) {
    return this.http.post('http://localhost:4322/users/register', user);
  }
  login(user: User) {
    return this.http.post('http://localhost:4322/user/login', user);
  }
  logout() {
    if(this.isUserLogedIn) {
      this.unsetUsetLogedIn();
      this.setUserData(null);
      localStorage.removeItem('userdata');
    }
  }
  setUserLogedIn() {
    this.isUserLogedIn = true;
  }
  unsetUsetLogedIn(){
    this.isUserLogedIn = false;
  }
  setUserData(user: any) {
    this.userData = user;
  }
  getUserData() {
    return this.userData;
  }
  isLoggedin() {
    return this.isUserLogedIn;
  }
}
