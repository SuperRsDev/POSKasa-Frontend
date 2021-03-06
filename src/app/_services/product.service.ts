import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProductModel} from '../_models/product.model';
import {ProductViewModel} from '../_models/product.viewmodel';
import {ArrayHelpers} from '../_helpers/array.helper';
import {CrudMode} from '../_models/crud-mode.enum';

@Injectable()
export class ProductService {
  private productsSelectionChanged$ = new Subject<ProductViewModel[]>();

  private lastProductSelected: ProductModel;
  private productsSelected: ProductViewModel[] = [];

  public getProductsSelectionChanged() {
    return this.productsSelectionChanged$.asObservable();
  }

  public getProductsSelected(): ProductViewModel[] {
    return this.productsSelected;
  }

  public notifyProductsRemovedChange() {
    this.productsSelected = [];
    this.productsSelectionChanged$.next(this.productsSelected);
  }

  public notifyProductsSelectionChanged(value: ProductModel) {
    this.lastProductSelected = value;
    this.updateSelectedProducts(value, CrudMode.Add);
    this.productsSelectionChanged$.next(this.productsSelected);
  }

  public notifyProductRemovalChanged(value: ProductModel) {
    this.updateSelectedProducts(value, CrudMode.Delete);
    this.productsSelectionChanged$.next(this.productsSelected);
  }

  private updateSelectedProducts(value: ProductModel, mode: CrudMode) {
    let productVm: ProductViewModel;
    const productIndex = this.productsSelected.findIndex((p) => p.product.id === value.id);
    if (productIndex > -1) {
      const productFound = this.productsSelected[productIndex];
      let quantity = productFound.quantity;
      if (mode === CrudMode.Delete) {
        quantity -= 1;
        if (quantity <= 0) {
          this.productsSelected = ArrayHelpers.removeAtIndex(this.productsSelected, productIndex);
        } else {
          productVm = {...productFound, quantity};
          this.productsSelected = ArrayHelpers.updateAtIndex(this.productsSelected, productVm, productIndex);
        }
      } else {
        quantity += 1;
        productVm = {...productFound, quantity};
        this.productsSelected = ArrayHelpers.updateAtIndex(this.productsSelected, productVm, productIndex);
      }
    } else {
      productVm = { product: value, quantity: 1 };
      this.productsSelected = ArrayHelpers.insert(this.productsSelected, productVm);
    }
  }
}
