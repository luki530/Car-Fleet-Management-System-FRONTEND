import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorName: string;
  errorUsername: string;
  errorEmail: string;
  errorPhoneNumber: string;
  errorPassword: string;
  errorConfirmPassword: string;

  @Input() passwordToCheck: string;
  @Input() barLabel: string = "Password strength:";

  bar0: string;
  bar1: string;
  bar2: string;
  bar3: string;
  bar4: string;

  private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];

  constructor(private title: Title, private authService: AuthService, private router: Router, private _snackBar: MatSnackBar, public translate: TranslateService) {
    title.setTitle('Sign Up')
   }

  private static measureStrength(pass: string) {
          let score = 0;
          let letters = {};
          for (let i = 0; i< pass.length; i++) {
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

    ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
            var password = changes['passwordToCheck'].currentValue;
            this.setBarColors(5, '#DDD');
            if (password) {
                let c = this.getColor(RegisterComponent.measureStrength(password));
                this.setBarColors(c.idx, c.col);
            }
        }
        private setBarColors(count, col) {
            for (let _n = 0; _n < count; _n++) {
                this['bar' + _n] = col;
            }
        }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.sessionStorage.setItem('registrationUsername', this.form.username);
        this.router.navigate(['confirmphonenumber']);
      },
      err => {
        this.isSignUpFailed = true;
        this.translate.getStreamOnTranslationChange('Something went wrong!').subscribe((text: string) => {
        this._snackBar.open(text, '', {
          duration: 5000,
          panelClass: ['prompt']
        });
      });
      }
    );
  }
}
