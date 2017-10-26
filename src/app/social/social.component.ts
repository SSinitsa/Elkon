import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  animations: [
    trigger('appearance', [
      state('hide', style({
        transform: 'translate(120%)',
      })),
      state('show', style({
        transform: 'translate(0)',
      })),
      transition('hide => show', animate('800ms ease-in')),
    ]),
  ]
})
export class SocialComponent implements OnInit, AfterViewInit {

  state = 'hide';

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    window.onload = this.appendScript();
  }

  appendScript(): any {
    const scriptElement2 = document.createElement('script');
    scriptElement2.text = 'VK.Widgets.Group("vk_groups", {mode: 4, height: "400", color1: \'ffffff\', color3: \'5f83ac\'}, 20003922);';
    scriptElement2.type = 'text/javascript';
    this.elementRef.nativeElement.appendChild(scriptElement2);
  }

  showMe() {
    this.state = 'show';
  }

  hideMe() {
    this.state = 'hide';
  }
}
