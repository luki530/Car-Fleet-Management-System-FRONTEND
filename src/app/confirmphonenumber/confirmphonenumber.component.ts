import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-confirmphonenumber',
  templateUrl: './confirmphonenumber.component.html',
  styleUrls: ['./confirmphonenumber.component.css']
})
export class ConfirmPhoneNumberComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isCodeInvalid = false;
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient,private authService: AuthService) { }


  ngOnInit() {
  }

  onSubmit() {
    // tslint:disable-next-line: max-line-length
    this.authService.confirmemail(this.form).subscribe(response => {console.log(response),
    this.isSuccessful = true,
    this.isCodeInvalid = false,
    this.successMessage = response.message;
  }
    , err => {
      this.errorMessage = err.error.message;
      this.isCodeInvalid = true;
    });
  }

}
