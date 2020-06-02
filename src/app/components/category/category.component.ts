import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../_models/user.model';
import {UserApiService} from '../../_services/api/user-api.service';

@Component({
    templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {

    constructor(private userService: UserApiService) {
    }

    ngOnInit() {
    }
}
