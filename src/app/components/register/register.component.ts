import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserApiService} from '../../_services/api/user-api.service';
import {AlertService} from '../../_services/alert.service';
import {UserModel} from '../../_models/user.model';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: UserModel = {} as any;
    loading = false;

    constructor(
        private router: Router,
        private userService: UserApiService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
