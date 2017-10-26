import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {

  brands: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands(): void {
    this.dataService.getProductBrands()
      .then(brands =>{
        console.log(brands);
        this.brands = brands;
      });
  }

  getBrandUrl (brand: string): string {
    return '../../assets/data/product-brands/' + brand;
  }

  getBrandName (brand: string): string {
    return brand.substring(0, brand.indexOf('.'));
  }

}
