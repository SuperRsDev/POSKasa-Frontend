import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Constants} from './_helpers/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const language = localStorage.getItem(Constants.LocalStorageKey.LanguageSelected);
    if (!language) {
      translate.setDefaultLang('en');
    } else {
      translate.setDefaultLang(language);
    }
  }

  title = 'poskasa-frontend';
}
