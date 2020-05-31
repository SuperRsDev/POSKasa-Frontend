import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../../_models/user.model';
import {Constants} from '../../_helpers/constants';
import {ProductModel} from '../../_models/product.model';

@Injectable()
export class ProductService {
    baseUri = Constants.Api.Products;

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<ProductModel[]>(this.baseUri);
    }

    getById(id: number) {
        return this.http.get<ProductModel>(this.baseUri + id);
    }

    create(user: ProductModel) {
        return this.http.post(this.baseUri, user);
    }

    update(user: ProductModel) {
        return this.http.put(this.baseUri + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUri + id);
    }
}
