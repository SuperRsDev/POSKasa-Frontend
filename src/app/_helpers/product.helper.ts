import {ProductViewModel} from '../_models/product.viewmodel';

export class ProductHelper {
  public static getTotalPrice(selectedProducts: ProductViewModel[]): number {
    return selectedProducts.map((prod) => prod.product.sellingPrice * prod.quantity)
      .reduce((totalPrice: number, currentPrice: number) => {
        return totalPrice + currentPrice;
      }, 0);
  }
}
