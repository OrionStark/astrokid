import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersService } from '../data-component/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  myForm : FormGroup;
  username: string;
  password: string;
  data: any;

  constructor(private formbuilder: FormBuilder, private router: Router,private http:Http, private user_services: UsersService) { 
    this.myForm = formbuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ngOnInit() {
  }

  login(data) {
    this.username = data.username;
    this.password = data.password;
    this.data = {
      username: this.username,
      password: this.password
    }
    this.user_services.login(this.data)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error);
          this.router.navigate(['/']);
        }
      );
  }

}
