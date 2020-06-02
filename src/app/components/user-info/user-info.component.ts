import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../_models/user.model';
import {UserApiService} from '../../_services/api/user-api.service';

@Component({
    templateUrl: 'user-info.component.html',
    selector: 'app-user-info',
})

export class UserInfoComponent implements OnInit {
    public currentUser: UserModel;
    public now: Date = new Date();

    constructor() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
      setInterval(() => {
        this.now = new Date();
      }, 5000);
    }
}
