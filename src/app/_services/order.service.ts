import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {CategoryModel} from '../_models/category.model';
import {PaymentTypeModel} from '../_models/payment-type.model';

@Injectable()
export class OrderService {
  private paymentTypeSelectionChanged$ = new Subject<PaymentTypeModel>();

  private lastCategorySelected: PaymentTypeModel;

  public getPaymentTypeSelectionChanged() {
    return this.paymentTypeSelectionChanged$.asObservable();
  }

  public notifyPaymentTypeChanged(value: PaymentTypeModel) {
    this.lastCategorySelected = value;
    this.paymentTypeSelectionChanged$.next(value);
  }

}
