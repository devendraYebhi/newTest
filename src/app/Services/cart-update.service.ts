import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


let currentValue = this.currentValue || 0;
@Injectable()
export class CartUpdateService {

  constructor() { }

  private bSubject = new BehaviorSubject(currentValue);
  cast = this.bSubject.asObservable();

  updateValue(newVal) {
    this.bSubject.next(newVal);
  }

}
