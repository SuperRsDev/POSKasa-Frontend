import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../_models/user.model';
import {UserService} from '../../_services/api/user.service';

@Component({
    templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }
}
