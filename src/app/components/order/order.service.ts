import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../../_models/user.model';


@Injectable()
export class OrderService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<UserModel[]>('/api/orders');
    }

    getById(id: number) {
        return this.http.get('/api/orders/' + id);
    }

    create(user: UserModel) {
        return this.http.post('/api/users', user);
    }

    update(user: UserModel) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}
