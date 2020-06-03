import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {CategoryModel} from '../_models/category.model';
import {PaymentTypeModel} from '../_models/payment-type.model';
import {OrderModel} from '../_models/order.model';

@Injectable()
export class OrderService {
  private paymentTypeSelectionChanged$ = new Subject<PaymentTypeModel>();
  private orderSelectionChanged = new Subject<OrderModel>();

  private lastCategorySelected: PaymentTypeModel;
  private lastOrderCreated: OrderModel;

  public getPaymentTypeSelectionChanged() {
    return this.paymentTypeSelectionChanged$.asObservable();
  }

  public notifyPaymentTypeChanged(value: PaymentTypeModel) {
    this.lastCategorySelected = value;
    this.paymentTypeSelectionChanged$.next(value);
  }

  public getOrderCreatedChange() {
    return this.orderSelectionChanged.asObservable();
  }

  public notifyOrderCreated(value: OrderModel) {
    this.lastOrderCreated = value;
    this.orderSelectionChanged.next(value);
  }

  public getLastOrderCreated() {
    return this.lastOrderCreated;
  }
}
