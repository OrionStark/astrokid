import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
  private userURI = '/api/users';
  constructor(private http : Http) { }

  createUser(newUserdata : User): Promise<void | User> {
    return this.http.post(this.userURI, newUserdata)
      .toPromise()
      .then(response => response.json() as User);
  }

  getUser(username : string): Promise<void | User> {
    return this.http.get(this.userURI, username)
      .toPromise()
      .then(response => response.json() as User);
  }
}
