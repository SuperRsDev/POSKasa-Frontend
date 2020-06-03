import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../_services/product.service';
import {ProductViewModel} from '../../_models/product.viewmodel';
import {UserTokenModel} from '../../_models/user-token.model';
import {AuthenticationService} from '../../_services/api/authentication.service';
import {OrderModel} from '../../_models/order.model';
import {OrderService} from '../../_services/order.service';


@Component({
    templateUrl: 'invoice-modal.component.html',
    selector: 'app-invoice-modal'
})

export class InvoiceModalComponent implements OnInit {
  products: ProductViewModel[];
  currentUser: UserTokenModel;
  order: OrderModel;

  constructor(private productService: ProductService,
              private authService: AuthenticationService,
              private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProductsSelected();
    this.currentUser = this.authService.getCurrentUser();
    this.order = this.orderService.getLastOrderCreated();
  }

  removeInvoice() {
    this.productService.notifyProductsRemovedChange();
  }
}
