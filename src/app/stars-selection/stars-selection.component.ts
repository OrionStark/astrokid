import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { UsersService } from '../data-component/users/users.service';
import { ConstellationsService } from '../data-component/constellations/constellations.service'
import * as $ from 'jquery';
declare var particlesJS: any;

@Component({
  selector: 'app-stars-selection',
  templateUrl: './stars-selection.component.html',
  styleUrls: ['./stars-selection.component.css'],
  animations: [
    trigger('viewDown', [
      state('text_fade', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('text_show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('nav_changed', style({
        background: 'rgb(19, 44, 65)',
        'box-shadow': '0px 0px 8px 0px #000000'
      })),
      state('nav_fixed', style({
        background: 'rgba(255,255,255,0)'
      })),
      transition('text_show <=> text_fade', animate('400ms ease-out')),
      transition('nav_fixed <=> nav_changed', animate('400ms ease-out'))
    ])
  ]
})
export class StarsSelectionComponent implements OnInit {
  private textIndicator: String;
  private navIndicator: String;
  private constellations_data: any;
  constructor(public el: ElementRef, private router: Router, private constellations: ConstellationsService, private users: UsersService) {
    this.textIndicator = 'text_show';
    this.navIndicator = 'nav_fixed';
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const nowViewPosition = window.scrollY;
    if (nowViewPosition >= this.el.nativeElement.querySelector('.stars_collection').offsetTop - 300) {
      this.textIndicator = 'text_fade';
      this.navIndicator = 'nav_changed';
    } else {
      this.textIndicator = 'text_show';
      this.navIndicator = 'nav_fixed';
    }
  }
  ngOnInit() {
    this.constellations.getAllConstellations()
      .subscribe(
        data => {
          this.constellations_data = JSON.parse(data.text());
          console.log(this.constellations_data);
          console.log(this.users.getUserData());
        },
        error => {
          console.log("There's an error");
        }
      );
    if (localStorage.getItem('userdata') != null) {
      this.router.navigate(['dashboard']);
    }
    particlesJS.load('particles-js', '../../assets/json/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

  }

  clickedConstellations(index) {
    var buffdata = this.users.getUserData();
    buffdata.constellation = this.constellations_data[index]._id;
    this.users.create(buffdata)
      .subscribe(
        data => {
          this.users.setUserData(null);
          this.router.navigate(['login']);
        }
      )
  }

}
