import { ConnectionService } from '../_services/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(fb: FormBuilder, private connectionService: ConnectionService) {

    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      copy: ['', Validators.requiredTrue],
    });
  }

  ngOnInit() {
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get copy() {
    return this.contactForm.get('copy');
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
