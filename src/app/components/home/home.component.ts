import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../_models/user.model';
import {UserApiService} from '../../_services/api/user-api.service';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    currentUser: UserModel;
    users: UserModel[] = [];

    constructor(private userService: UserApiService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.get().subscribe(users => { this.users = users; });
    }
}
