import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrls: ['./confirmemail.component.css']
})

export class ConfirmEmailComponent implements OnInit {
  emailConfirmationMessage: string;
  loginMessage: string;
  constructor(private authService: AuthService, private http: HttpClient, private route: ActivatedRoute) { }

  token: string = '';

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.authService.confirmemail(this.token).subscribe();
  }

}
