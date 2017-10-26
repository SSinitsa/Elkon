import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {MailService} from "../service/mail.service";
import {Message} from "../model/message";
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('appearance', [
      state('hide', style({
        transform: 'scale(0)',
      })),
      state('show', style({
        transform: 'scale(1)',
      })),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  message: Message;
  success = '';
  error = '';
  state = 'hide';

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    this.message = new Message;
  }

  sendEmail() {
    if (!this.validateForm()) return;
    this.mailService.sendEmail(this.message).subscribe(res => {
      console.log('MailService Success', res);
    }, error => {
      console.log('MailService Error', error);
    });
    this.success = 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее  время';
  }

  validateForm(): boolean {
    console.log(this.message);
    if (!this.message.name || !this.message.phone) {
      this.error = 'Заполните, пожалуйста, обязательные поля!';
      return false;
    }
    return true;
  }

  show(): void {
    this.error = null;
    this.success = null;
    this.state = 'show';
  }

  hide(): void {
    this.state = 'hide';
  }

}
