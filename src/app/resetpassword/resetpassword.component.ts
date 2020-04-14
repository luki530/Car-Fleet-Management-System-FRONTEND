import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: any = {};
  errorMessage = '';
  isSuccessful = false;
  isFailed = false;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
      this.authService.resetpassword(this.form).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isFailed = true;
        }
      );
  }

}
