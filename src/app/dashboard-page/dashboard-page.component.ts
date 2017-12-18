import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Route } from '@angular/router/src/config';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
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
export class DashboardPageComponent implements OnInit {
  private textIndicator: String;
  private navIndicator: String;
  constructor(public el: ElementRef) {
    this.textIndicator = 'text_show';
    this.navIndicator = 'nav_fixed';
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const nowViewPosition = window.scrollY;
    if (nowViewPosition >= 30) {
      this.textIndicator = 'text_fade';
      this.navIndicator = 'nav_changed';
    } else {
      this.textIndicator = 'text_show';
      this.navIndicator = 'nav_fixed';
    }
  }
  ngOnInit() {
  }

}
