import {Injectable} from "@angular/core";
import {Http, HttpModule} from "@angular/http";
import {Message} from "../model/message";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";

const EMAIL_URL = '../../assets/php/email.php';

@Injectable()
export class MailService {

  constructor (private http: Http) {
  }

  sendEmail(message: Message): Observable<Message> | any {
    console.log(message);
    return this.http.post(EMAIL_URL, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      });
  }

}
