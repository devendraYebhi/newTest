import { Component } from '@angular/core';
import { trigger, transition, style, query, group, animate } from '@angular/animations';
import { Router } from '@angular/router';

import { routeAnimationSlideInOut } from '../assets/_animations/index';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimationSlideInOut]
})
export class AppComponent {
  constructor(private router: Router, private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getDepth(outlet) {
    this.setTitle(outlet.activatedRouteData['pageTitle']);
    return outlet.activatedRouteData['depth'];
  }
}
