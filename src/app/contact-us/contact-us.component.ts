import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    window.onload = this.appendScript();
  }

  appendScript(): any {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://swc.cdn.skype.com/sdk/v1/sdk.min.js';
    this.elementRef.nativeElement.appendChild(scriptElement);
  }

}
