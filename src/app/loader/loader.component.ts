import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {MainBannerComponent} from "../main-banner/main-banner.component";
import {LoaderService} from "../service/loader.service";

const OPACITY_LEVEL = 0.2;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  constructor(@Inject('loaderService') private loaderService: LoaderService) { }

  ngOnInit() {
  }

    ngOnDestroy() {
  }

  isLoading(): boolean {
    this.toggleLoader();
    return this.loaderService.isLoading();
  }

  toggleLoader(): void {
    if (this.loaderService.isLoading()) {
      $('img').css('opacity', OPACITY_LEVEL);
      $('button').css('opacity', OPACITY_LEVEL);
      $('p').css('opacity', OPACITY_LEVEL);
      $('div').not('.loader').not('#navigation').css('opacity', OPACITY_LEVEL);
      $('span').not('.loader span').css('opacity', OPACITY_LEVEL);
      $('.loader').css('opacity', 1);
      $('.loader span').css('opacity', 1);
    } else {
      $('img').css('opacity', '1');
      $('button').css('opacity', '1');
      $('p').css('opacity', '1');
      $('div').css('opacity', '1');
      $('span').css('opacity', '1');
      $('.loader').css('opacity', '0');
    }
  }

}
