import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private translate: TranslateService) {
    this.translate.getStreamOnTranslationChange('About Us').subscribe((text: string) => {
    title.setTitle(text)
    });
   }

  ngOnInit(): void {
  }

}
