import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../_models/user.model';

@Component({
    templateUrl: 'user-info.component.html',
    selector: 'app-user-info',
  styleUrls: ['./user-info.component.scss']
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
