import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../../_models/user.model';
import {Constants} from '../../_helpers/constants';
import {ProductModel} from '../../_models/product.model';
import {BaseHelper} from '../../_helpers/base.helper';
import {BaseApiService} from './base-api.service';

@Injectable()
export class ProductApiService extends BaseApiService<ProductModel> {
    constructor(http: HttpClient) {
      super(http, Constants.Api.Products);
    }

    getByCategoryName(category: string) {
      return this.http.get<ProductModel[]>(BaseHelper.getByIdUri(this.baseUri + 'for', category));
    }
}
