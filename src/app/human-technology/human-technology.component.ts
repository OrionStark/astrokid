import { Component, OnInit } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
declare var fullpage: any;

@Component({
  selector: 'app-human-technology',
  templateUrl: './human-technology.component.html',
  styleUrls: ['./human-technology.component.css']
})
export class HumanTechnologyComponent implements OnInit {

  constructor(public fullpageService: MnFullpageService) { }

  ngOnInit() {
  }
}
