import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangePasswordComponent implements OnInit {
  isFailed = false;
  isSuccessful = false;
  errorMessage = '';
  successMessage = '';

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  form: any = {};

  ngOnInit() {
    this.form.token = this.route.snapshot.queryParamMap.get('token');
  }

  onSubmit() {
    // tslint:disable-next-line: max-line-length
    this.http.post<any>('https://backend.carfleetmanagementsystem.pl:443/auth/changepassword', { token: this.form.token, newPassword: this.form.newPassword, confirmNewPassword: this.form.confirmNewPassword }, this.httpOptions).subscribe(
      data => {
        this.isFailed = false;
        this.isSuccessful = true;
      },
      err => {
        // this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }
}
