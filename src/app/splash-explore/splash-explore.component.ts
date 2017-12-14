import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-splash-explore',
  templateUrl: './splash-explore.component.html',
  styleUrls: ['./splash-explore.component.css']
})
export class SplashExploreComponent implements OnInit {
  private title: any;
  private background: any;
  private desc: any;
  private linkTarget: any;
  private sub: any;
  constructor(public router: Router, private route: ActivatedRoute, private el: ElementRef) { 
    this.sub = this.route.params.subscribe(params => {
      this.title = params['title'];
      this.background = params['background'];
      this.desc = params['description'];
      this.linkTarget = params['link'];
    });
  }

  ngOnInit() {
  }

  getBackground() {
    return "url("+this.background+") no-repeat center center";
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
/*
  private lunaPageTesting(): void {
    let contTitle = "Luna 2";
    let cont_desc = "Semua berawal dari hal yang kecil";
    let cont_linkTarget = "/humantechnology";
    let cont_background = "../../assets/img/materialImage/human_technology1.jpg";

    this.router.navigate(['/exploration', {link: cont_linkTarget, background: cont_background, title: contTitle, description: cont_desc}]);
  }
  */

}
