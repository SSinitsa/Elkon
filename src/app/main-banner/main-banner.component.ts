import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BannerService} from '../service/banner.service';
import {error} from 'util';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('hide', style({
        opacity: '0.01',
      })),
      state('show', style({
        opacity: '1',
      })),
      transition('hide => show', animate('5000ms ease-in')),
    ]),
  ]
})

export class MainBannerComponent implements OnInit, OnDestroy {

  banners: string[];
  index = 0;
  state = 'show';

  constructor(private bannerService: BannerService) {
  }

  ngOnInit() {
    this.getBanners();
    setTimeout(()=> {
      this.hideMe();
    },5000);
  }

  ngOnDestroy() {
  }

  getBanners(): void {
    this.bannerService.getBanners()
      .then(banners => {
        this.banners = banners;
      })
      .catch(() => alert('error'));
  }

  getBanner(): string {
    return '../../assets/banners/' + this.banners[this.index].substring(0, this.banners[this.index].indexOf(' '));
  }

  goByLink(): void {
    window.location.href = this.banners[this.index].substring(this.banners[this.index].indexOf(' '));
  }

  showMe() {
    this.index++;
    if (this.index >= this.banners.length) this.index =0;
    this.state = 'show';
    setTimeout(()=> {
      this.hideMe();
    },8000);
  }

  hideMe() {
    this.state = 'hide';
    setTimeout(()=> {
      this.showMe();
    },2000);
  }
}
