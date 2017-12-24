import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersService } from '../data-component/users/users.service';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userModel: any = {};
  data: any = null;
  constructor(private router: Router,private http:Http, private user_services: UsersService) { }

  ngOnInit() {
  }

  register() {
    this.user_services.create(this.userModel)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
          this.router.navigate(['/404']);
        }
      );
  }

}
