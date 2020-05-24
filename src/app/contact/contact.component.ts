import { ConnectionService } from '../_services/connection.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: any = { isChecked: false };
  selectedValue: string;
  errorUsername: string;
  errorEmail: string;
  errorMessage: string;
  errorSubject: string;
  selected = 'option2';
  subjects = [
    'Feedback',
    'Report a bug',
    'Feature a request'
  ];

  constructor(private connectionService: ConnectionService,  private _snackBar: MatSnackBar, private translate: TranslateService) {

  }

  onSubmit(form: NgForm) {
    this.connectionService.sendMessage(this.form).subscribe(() => {
      this.translate.stream('Message has been sent!').subscribe((text:string) => {
      this._snackBar.open(text, '', {
        duration: 5000,
        panelClass: ['advice']
      });
    });
      form.resetForm();
    }, (error: any) => {
    });
  }

}
