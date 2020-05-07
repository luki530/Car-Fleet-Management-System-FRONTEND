import { ConnectionService } from '../_services/connection.service';
import { Component} from '@angular/core';


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
  compareFn(c1,c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


  onSubmit() {
    this.connectionService.sendMessage(this.form.value).subscribe(() => {
      alert('Your message has been sent.');
      this.form.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
