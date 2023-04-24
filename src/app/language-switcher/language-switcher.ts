import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  template: `
    <select [(ngModel)]="selectedLanguage" (change)="switchLanguage()">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  `
})
export class LanguageSwitcherComponent {
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) { }

  switchLanguage() {
    this.translate.use(this.selectedLanguage);
  }
  
}
