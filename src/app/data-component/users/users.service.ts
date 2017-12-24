import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class UsersService {
  private userURI = '/api/users';
  constructor(private http : Http) { }

  create(user: User) {
    return this.http.post('http://localhost:4322/users/register', user);
  }
  login(user: User) {
    return this.http.post('http://localhost:4322/user/login', user);
  }
}
