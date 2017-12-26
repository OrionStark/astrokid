import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersService } from '../data-component/users/users.service';
import { Router } from '@angular/router';

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
    if (localStorage.getItem('userdata') != null) {
      this.router.navigate(['dashboard']);
    }
  }

  register() {
    this.userModel.savePoint = 0;
    this.user_services.setUserData(this.userModel);
    this.router.navigate(['starsselect']);
  }

}
