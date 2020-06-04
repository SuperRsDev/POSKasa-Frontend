import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../_services/product.service';


@Component({
    templateUrl: 'invoice-modal.component.html',
    selector: 'app-invoice-modal'
})

export class InvoiceModalComponent implements OnInit {

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {

  }

  removeInvoice() {
    this.productService.notifyProductsRemovedChange();
  }

  print(): void {
    let printContents;
    let popupWin;
    printContents = document.getElementById('orderInvoice').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html lang="en">
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
