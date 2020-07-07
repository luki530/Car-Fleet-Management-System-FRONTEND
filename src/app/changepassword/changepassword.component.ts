import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from '../global-constants';



@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangePasswordComponent implements OnInit {
  isFailed = false;
  isSuccessful = false;
  errorMessage = '';
  successMessage: string;
  errorPassword: string;
  errorConfirmPassword: string;
  form: any = {};

  @Input() passwordToCheck: string;
  @Input() barLabel: string = "Password strength:";

  bar0: string;
  bar1: string;
  bar2: string;
  bar3: string;
  bar4: string;

  private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];


  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private title: Title, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    title.setTitle('Change Password')
  }

  private static measureStrength(pass: string) {
    let score = 0;
    let letters = {};
    for (let i = 0; i < pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
    }
    let variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
    };
    let variationCount = 0;
    for (let check in variations) {
      variationCount += (variations[check]) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    return Math.trunc(score);
  }

  private getColor(score: number) {
    let idx = 0;
    if (score > 90) {
      idx = 4;
    } else if (score > 70) {
      idx = 3;
    } else if (score >= 40) {
      idx = 2;
    } else if (score >= 20) {
      idx = 1;
    }
    return {
      idx: idx + 1,
      col: this.colors[idx]
    };
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    var password = changes['passwordToCheck'].currentValue;
    this.setBarColors(5, '#DDD');
    if (password) {
      let c = this.getColor(ChangePasswordComponent.measureStrength(password));
      this.setBarColors(c.idx, c.col);
    }
  }
  private setBarColors(count, col) {
    for (let _n = 0; _n < count; _n++) {
      this['bar' + _n] = col;
    }
  }


  ngOnInit() {
    this.form.token = this.route.snapshot.queryParamMap.get('token');
  }

  onSubmit() {
    // tslint:disable-next-line: max-line-length
    this.http.post<any>(GlobalConstants.URL+'auth/changepassword', { token: this.form.token, newPassword: this.form.newPassword, confirmNewPassword: this.form.confirmNewPassword }, this.httpOptions).subscribe(
      data => {
        this.isSuccessful = true;
      },
      err => {
        this.isFailed = true;
      }
    );
  }
}
