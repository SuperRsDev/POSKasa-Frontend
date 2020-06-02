import {HttpClient} from '@angular/common/http';
import {BaseHelper} from '../../_helpers/base.helper';

export abstract  class BaseApiService<T> {
  constructor(protected http: HttpClient, protected baseUri: string) {

  }

  get() {
    return this.http.get<T[]>(this.baseUri);
  }

  getById(id: number) {
    return this.http.get<T>(BaseHelper.getByIdUri(this.baseUri, id.toString()));
  }

  create(user: T) {
    return this.http.post(this.baseUri, user);
  }

  update(user: T, id: string) {
    return this.http.put(BaseHelper.getByIdUri(this.baseUri, id), user);
  }

  delete(id: number) {
    return this.http.delete(BaseHelper.getByIdUri(this.baseUri, id.toString()));
  }
}
