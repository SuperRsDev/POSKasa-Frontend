import { Component, OnInit } from '@angular/core';

import {AuthenticationService} from '../../_services/api/authentication.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Constants} from '../../_helpers/constants';

@Component({
    templateUrl: 'navbar.component.html',
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private authService: AuthenticationService,
                private router: Router,
                private translate: TranslateService) {}

    ngOnInit() {
      this.isLoggedIn = this.authService.isLoggedIn;
    }

    public logout() {
      this.authService.logout();
      this.router.navigate(['/']);
    }

    public selectLanguage(language: string) {
      localStorage.setItem(Constants.LocalStorageKey.LanguageSelected, language);
      this.translate.setDefaultLang(language);
    }
}
