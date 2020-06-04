import { Component, OnInit } from '@angular/core';
import {PaymentTypeModel} from '../../_models/payment-type.model';
import {OrderHelper} from '../order/order.helper';
import {OrderService} from '../../_services/order.service';
import {OrderApiService} from '../../_services/api/order-api.service';
import {BaseHelper} from '../../_helpers/base.helper';
import {AuthenticationService} from '../../_services/api/authentication.service';
import {ProductService} from '../../_services/product.service';
import {Observable, forkJoin } from 'rxjs';
import {ProductOrderApiService} from '../../_services/api/product-order-api.service';
import {OrderModel} from '../../_models/order.model';

@Component({
    templateUrl: 'order-payment-method.component.html',
    selector: 'app-order-payment-method',
    styleUrls: ['./order-payment-method.component.scss']
})

export class OrderPaymentMethodComponent implements OnInit {
    paymentTypes: PaymentTypeModel[] = OrderHelper.getPaymentTypes();
    selectedPaymentType: PaymentTypeModel;

    constructor(private orderService: OrderService,
                private orderApiService: OrderApiService,
                private authService: AuthenticationService,
                private productService: ProductService,
                private productOrderApiService: ProductOrderApiService) {
    }

    ngOnInit() {

    }

    selectPaymentType(type: PaymentTypeModel) {
      this.selectedPaymentType = type;
      this.orderService.notifyPaymentTypeChanged(type);
      const user = this.authService.getCurrentUser();
      const order = {
        employeeId: user.userId,
        paymentTypeId: this.selectedPaymentType.id,
        date: new Date().toLocaleDateString(),
        status: 'Active',
        orderType: 'new'
      };

      this.orderApiService.create(order).subscribe((createdOrder: OrderModel) => {

        const products = this.productService.getProductsSelected();
        const productOrderRequests: Observable<any>[] = products.map((product) => {
          return this.productOrderApiService.create({
            productId: product.product.id,
            quantity: product.quantity,
            orderId: createdOrder.id
          });
        });

        forkJoin(productOrderRequests).subscribe(results => {
          this.orderService.notifyOrderCreated(createdOrder);
        });
      });
    }
}
