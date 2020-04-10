import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-confirmemail',
    templateUrl: './confirmemail.component.html',
    styleUrls: ['./confirmemail.component.css']
})

export class ConfirmEmailComponent implements OnInit {
    content = '';

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        // @ts-ignore
        this.authService.subscribe(
            data => {
                this.content = data;
            },
            err => {
                this.content = JSON.parse(err.error).message;
            }
        );
    }
}
