import { ConnectionService } from '../_services/connection.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: any = { isChecked: false };
  selectedValue: string;
  selected = 'option2';
  subjects = [
    'Feedback',
    'Report a bug',
    'Feature a request'
  ];

  constructor(private connectionService: ConnectionService,  private _snackBar: MatSnackBar) {

  }

  onSubmit(form: NgForm) {
    this.connectionService.sendMessage(this.form).subscribe(() => {
      this._snackBar.open('Message has been sent !', 'Close', {
        duration: 5000,
        panelClass: ['advice']
      });
      form.resetForm();
    }, (error: any) => {
    });
  }

}
