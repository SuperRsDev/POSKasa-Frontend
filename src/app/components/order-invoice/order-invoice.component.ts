import { Component, OnInit } from '@angular/core';
import {ProductViewModel} from '../../_models/product.viewmodel';
import {UserTokenModel} from '../../_models/user-token.model';
import {OrderModel} from '../../_models/order.model';
import {ProductService} from '../../_services/product.service';
import {AuthenticationService} from '../../_services/api/authentication.service';
import {OrderService} from '../../_services/order.service';
import {BaseHelper} from '../../_helpers/base.helper';
import {ProductHelper} from '../../_helpers/product.helper';

@Component({
    templateUrl: 'order-invoice.component.html',
    selector: 'app-order-invoice',
    styleUrls: ['./order-invoice.component.scss']
})

export class OrderInvoiceComponent implements OnInit {
  products: ProductViewModel[] = [];
  currentUser: UserTokenModel = {} as any;
  order: OrderModel = {} as any;
  totalPrice = 0;

  companyInfo = {
    name: 'Moja prodavnica',
    address: 'Zmaja od Bosne bb',
    town: 'Sarajevo'
  };

  constructor(private productService: ProductService,
              private authService: AuthenticationService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrderCreatedChange()
      .subscribe((orderCreated) => {
        BaseHelper.getJquery()('#invoiceModalId').modal('show');
        this.products = this.productService.getProductsSelected();
        this.currentUser = this.authService.getCurrentUser();
        this.order = this.orderService.getLastOrderCreated();
        this.totalPrice = ProductHelper.getTotalPrice(this.products);
    });
  }
}
