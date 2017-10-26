import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBrandsComponent } from './vendor-brands.component';

describe('VendorBrandsComponent', () => {
  let component: VendorBrandsComponent;
  let fixture: ComponentFixture<VendorBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
