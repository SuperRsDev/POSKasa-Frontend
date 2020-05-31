import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../../_models/user.model';
import {Constants} from '../../_helpers/constants';

@Injectable()
export class UserService {
    baseUri = Constants.Api.Users;
    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<UserModel[]>(this.baseUri);
    }

    getById(id: number) {
        return this.http.get(this.baseUri + id);
    }

    create(user: UserModel) {
        return this.http.post(this.baseUri, user);
    }

    update(user: UserModel) {
        return this.http.put(this.baseUri + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUri + id);
    }
}
