import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../../_models/user.model';
import {Constants} from '../../_helpers/constants';
import {ProductModel} from '../../_models/product.model';
import {BaseHelper} from '../../_helpers/base.helper';
import {BaseApiService} from './base-api.service';
import {ProductOrderModel} from '../../_models/product-order.model';

@Injectable()
export class ProductOrderApiService extends BaseApiService<ProductOrderModel> {
  constructor(http: HttpClient) {
    super(http, Constants.Api.ProductOrders);
  }
}
