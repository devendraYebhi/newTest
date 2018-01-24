import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTableEqupComponent } from './popup-table-equp.component';

describe('PopupTableEqupComponent', () => {
  let component: PopupTableEqupComponent;
  let fixture: ComponentFixture<PopupTableEqupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTableEqupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTableEqupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
