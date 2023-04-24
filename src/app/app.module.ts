import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomTranslateLoader } from './customLoader';

import { LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@NgModule({
  declarations: [AppComponent, LanguageSwitcherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [HttpClient],
      },
    })
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: navigator.language.split('-')[0] || 'en' 
    },
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
