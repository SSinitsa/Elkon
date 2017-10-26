import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAlertComponent } from './screen-alert.component';

describe('ScreenAlertComponent', () => {
  let component: ScreenAlertComponent;
  let fixture: ComponentFixture<ScreenAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
