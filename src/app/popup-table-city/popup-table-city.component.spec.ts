import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTableCityComponent } from './popup-table-city.component';

describe('PopupTableCityComponent', () => {
  let component: PopupTableCityComponent;
  let fixture: ComponentFixture<PopupTableCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTableCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTableCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
