import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCALE_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-language-switcher></app-language-switcher>
  <h1>{{ 'WELCOME' | translate }}</h1>
  <p>{{ 'HOME.INTRO' | translate }}</p>
  <button>{{'LOGIN' | translate}} </button>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService, @Inject(LOCALE_ID) private localeId: string) {
    translate.setDefaultLang(localeId);
  }
  title = 'multi-lang';

}
