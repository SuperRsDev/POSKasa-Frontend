import {PaymentTypeModel} from '../../_models/payment-type.model';

export class OrderHelper {
  public static getPaymentTypes(): PaymentTypeModel[] {
    return [
      {
        id: 1,
        name: 'order_payment_type_cash'
      },
      {
        id: 2,
        name: 'order_payment_type_card'
      },
      {
        id: 3,
        name: 'order_payment_type_estimate'
      }
    ];
  }
}
