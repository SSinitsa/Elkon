import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {

  private sub: any;
  brand: string;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.brand = params['brand'];
    });
  }
}
