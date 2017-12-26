import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
@Injectable()
export class ConstellationsService {
  constructor(private http: Http) { }

  getAllConstellations() {
    return this.http.get('http://localhost:4322/constellations');
  }

  getConstellationById(_id: string) {
    return this.http.get('http://localhost:4322/constellation/' + _id);
  }

}
