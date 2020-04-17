import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrls: ['./confirmemail.component.css']
})

export class ConfirmEmailComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  token = '';

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.http.get<any>(' http://localhost:8080/auth/confirm-email?token=' + this.token).subscribe();
  }
}
