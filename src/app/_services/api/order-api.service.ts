import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseApiService} from './base-api.service';
import {OrderModel} from '../../_models/order.model';
import {Constants} from '../../_helpers/constants';

@Injectable()
export class OrderApiService extends BaseApiService<OrderModel> {
    constructor(http: HttpClient) {
      super(http, Constants.Api.Orders);
    }
}
