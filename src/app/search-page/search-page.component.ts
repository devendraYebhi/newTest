import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpApiService } from '../Services/http-api.service';
import { trigger, style, transition, animate, keyframes, query, stagger, group } from '@angular/animations';
import { fadeInAnimation } from '../../assets/_animations/index';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  animations: [fadeInAnimation]
})
export class SearchPageComponent implements OnInit {
  emptyErrorMsg: boolean = false;
  @ViewChild('search') searchInputElem: ElementRef;
  constructor(private _http: HttpApiService, private router: Router) { }

  ngOnInit() {
  }
  goToTable(e, type) {
    e.stopPropagation();
    let val = this.searchInputElem.nativeElement.value;
    if (!val) {
      this.emptyErrorMsg = true;
      return false;
    }
    this.emptyErrorMsg = false;
    const searchInputValue = this.searchInputElem.nativeElement.value;


    this.router.navigate(['/detail/' + searchInputValue]);
  }
  goToTableForAllRecords() {
    this.router.navigate(['/detail']);
  }
  getDepth(outlet) {
    alert('search page');
    return outlet.activatedRouteData['depth'];
  }

}
