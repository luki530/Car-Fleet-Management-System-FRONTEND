import { ConnectionService } from '../_services/connection.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: any = {};
  selectedValue: string;
  selected = 'option2';
  subjects = [
    'Feedback',
    'Report a bug',
    'Feature a request'
  ];

  constructor(private connectionService: ConnectionService) {

  }


  onSubmit() {
    this.connectionService.sendMessage(this.form).subscribe(() => {
      alert('Your message has been sent.');
      this.form.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
