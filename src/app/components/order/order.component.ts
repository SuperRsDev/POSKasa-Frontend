import { Component, OnInit } from '@angular/core';

import {ProductService} from '../../_services/product.service';
import {ProductViewModel} from '../../_models/product.viewmodel';
import {ProductHelper} from '../../_helpers/product.helper';

@Component({
    templateUrl: 'order.component.html',
    selector: 'app-order',
    styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {
    selectedProducts: ProductViewModel[];
    totalPrice = 0;

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
      this.productService.getProductsSelectionChanged()
        .subscribe((products: ProductViewModel[]) => {
        this.selectedProducts = products;
        this.setTotalPrice();
      });
    }

    public removeProduct(productVm: ProductViewModel) {
      this.productService.notifyProductRemovalChanged(productVm.product);
    }

    private setTotalPrice() {
      this.totalPrice = ProductHelper.getTotalPrice(this.selectedProducts);
    }
}
