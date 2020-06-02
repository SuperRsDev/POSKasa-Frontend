import { Component, OnInit } from '@angular/core';
import {ProductViewModel} from '../../_models/product.viewmodel';

@Component({
    templateUrl: 'order-invoice.component.html',
    selector: 'app-order-invoice',
    styleUrls: ['./order-invoice.component.scss']
})

export class OrderInvoiceComponent implements OnInit {
  choosenProducts: ProductViewModel[];

  constructor() {
  }

  ngOnInit() {
  }
}
