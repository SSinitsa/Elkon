import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-vendor-brands',
  templateUrl: './vendor-brands.component.html',
  styleUrls: ['./vendor-brands.component.css']
})
export class VendorBrandsComponent implements OnInit {

  brands: string[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getBrands();
  }

  getBrands(): void {
    this.dataService.getVendorBrands()
      .then(brands => {
        console.log(brands);
        this.brands = brands;
      });
  }

  getBrandUrl(brand: string): string {
    return '../../assets/data/vendor-brands/' + brand;
  }

  getBrandName(brand: string): string {
    return brand.substring(0, brand.indexOf('.'));
  }

}
