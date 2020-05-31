import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../_models/user.model';
import {UserService} from '../../_services/api/user.service';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: UserModel;
    users: UserModel[] = [];

    constructor(private userService: UserService) {
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
