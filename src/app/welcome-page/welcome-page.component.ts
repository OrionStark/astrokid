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
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateY(-20%)'
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ]),
    trigger('elementShow', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('right', style({
        opacity: 0,
        transform: 'translateX(20%)'
      })),
      state('left', style({
        opacity: 0
      })),
      state('hide', style({
        transform: 'translateX(10%)',
        opacity: 0
      })),
      state('showNav', style({
        opacity: 1
      })),
      transition('showNav => hide', animate('400ms ease-out')),
      transition('left => show', animate('400ms ease-out')),
      transition('right => show', animate('400ms ease-out')),
      transition('show => right', animate('400ms ease-in')),
      transition('hide => showNav', animate('400ms ease-in'))
    ])
  ]
})
export class WelcomePageComponent implements OnInit {
  title = 'Astrokid';
  state = 'hide';
  state1 = 'hide';
  imgState = 'right';
  visible = 'visible';
  constructor(public el: ElementRef, private route: ActivatedRoute,
    private router: Router) { }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // tslint:disable-next-line:max-line-length
    const componentPosition = this.el.nativeElement.querySelector('.section2').offsetTop - 550;
    const anotherComponentPost = this.el.nativeElement.querySelector('.section3').offsetTop - 550;
    const scrollPosition = window.scrollY;
    console.log(scrollPosition.toString() + ' : ' + componentPosition.toString());
    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
    if (scrollPosition >= anotherComponentPost) {
      this.state1 = 'show';
    } else {
      this.state1 = 'hide';
    }
    if (scrollPosition >= this.el.nativeElement.querySelector('.section1').offsetTop - 420) {
      this.visible = 'hide';
      this.imgState = 'show';
    } else {
      this.visible = 'showNav';
      this.imgState = 'right'
    }
    if (scrollPosition >= this.el.nativeElement.querySelector('.section3').offsetTop) {
      this.state = 'hide';
    }
  }

  ngOnInit() {
  }

  goToHumanTech(){
    let routerlink = "humantechnology";
    let backgroundProperty = "../../assets/img/materialImage/human_tech.jpeg";
    let title = "Knowledge is our power";
    let some_desc = "Never stop searching and learning";

    this.router.navigate(['/exploration', { link: routerlink, background: backgroundProperty, 
    title: title, description: some_desc }]);
  }

}
