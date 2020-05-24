import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {
  logutTitle: string;
  logoutSubtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
