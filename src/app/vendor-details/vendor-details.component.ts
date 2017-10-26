import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  private sub: any;
  vendor: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.vendor = params['vendor'];
    });
  }

  getBrandImage(brand: string): string {
    return '../../assets/data/vendor-brands/' + brand +'.jpg';
  }

  getBrandDescription(brand: string): string {
    return '../../assets/data/vendor-descriptions/' + brand + '.png';
  }

}
