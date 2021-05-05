import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactEmailService} from './contact.emailService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  // providers: [ContactEmailService]
})
export class ContactComponent implements OnInit {
  @ViewChild('f') bookingForm: NgForm;

  sending = false;
  customerInfo = {
    name: '',
    email: '',
    message: '',
    phone: ''
  };
  constructor(private contactEmailService: ContactEmailService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.customerInfo.email = this.bookingForm.value.email;
    this.customerInfo.name = this.bookingForm.value.name;
    this.customerInfo.message = this.bookingForm.value.message;
    this.customerInfo.phone = this.bookingForm.value.phone;

    this.contactEmailService.sendMail(this.customerInfo)
      .subscribe(response => {
        console.log(response);
        this.sending = true;
      });
  }

  // bookingForms = [
  //   {
  //     name: 'name',
  //     id: 'name',
  //     type: 'text',
  //     required: true,
  //   },
  //   {
  //     name: 'email',
  //     id: 'email',
  //     type: 'email',
  //     required: true,
  //   },
  //   {
  //     name: 'phone',
  //     id: 'phone',
  //     type: 'text',
  //     required: true,
  //   },
  //   {
  //     name: 'message',
  //     id: 'message',
  //     type: 'textarea',
  //     required: false,
  //   },
  // ];
}
