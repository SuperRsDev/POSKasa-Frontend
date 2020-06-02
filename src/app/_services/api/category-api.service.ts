import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Constants} from '../../_helpers/constants';
import {CategoryModel} from '../../_models/category.model';
import {BaseApiService} from './base-api.service';

@Injectable()
export class CategoryApiService extends BaseApiService<CategoryModel> {
    constructor(http: HttpClient) {
      super(http, Constants.Api.Categories);
    }
}
