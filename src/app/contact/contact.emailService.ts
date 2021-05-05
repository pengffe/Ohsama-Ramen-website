import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class ContactEmailService{

  constructor(private http: HttpClient) {
  }

  sendMail(customerInfo: object): Observable<any>{
    console.log(customerInfo);
    return this.http.post('http://127.0.0.1:8081/send-email', customerInfo);
  }
}
