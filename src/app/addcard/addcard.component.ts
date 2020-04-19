import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddCardComponent implements OnInit {
  form: any;
  value = false;
  cardId = 4;

  constructor(public dialogref: MatDialogRef<AddCardComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onClose();
    this.value = true;
  }

  onClose() {
    this.dialogref.close();
  }

}
