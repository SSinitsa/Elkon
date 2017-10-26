import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBrandsComponent } from './product-brands.component';

describe('ProductBrandsComponent', () => {
  let component: ProductBrandsComponent;
  let fixture: ComponentFixture<ProductBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
