import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Constants} from '../../_helpers/constants';
import {CategoryModel} from '../../_models/category.model';

@Injectable()
export class CategoryService {
    baseUri = Constants.Api.Categories;
    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<CategoryModel[]>(this.baseUri);
    }

    getById(id: number) {
        return this.http.get<CategoryModel>(this.baseUri + id);
    }

    create(categoryModel: CategoryModel) {
        return this.http.post(this.baseUri, categoryModel);
    }

    update(category: CategoryModel) {
        return this.http.put(this.baseUri + category.id, category);
    }

    delete(id: number) {
        return this.http.delete(this.baseUri + id);
    }
}
