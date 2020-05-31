import { Component, OnInit } from '@angular/core';

import {UserService} from '../../_services/api/user.service';

@Component({
    templateUrl: 'order.component.html'
})

export class OrderComponent implements OnInit {
    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }
}
