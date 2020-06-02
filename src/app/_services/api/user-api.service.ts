import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../../_models/user.model';
import {Constants} from '../../_helpers/constants';
import {BaseApiService} from './base-api.service';

@Injectable()
export class UserApiService extends BaseApiService<UserModel> {
  constructor(http: HttpClient) {
    super(http, Constants.Api.Users);
  }
}
