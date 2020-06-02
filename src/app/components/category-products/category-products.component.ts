import { Component, OnInit } from '@angular/core';

import {CategoryModel} from '../../_models/category.model';
import {CategoryApiService} from '../../_services/api/category-api.service';
import {ProductModel} from '../../_models/product.model';
import {ProductApiService} from '../../_services/api/product-api.service';
import {CategoryService} from '../../_services/category.service';
import {ProductService} from '../../_services/product.service';

@Component({
    templateUrl: 'category-products.component.html',
    selector: 'app-category-products',
    styleUrls: ['./category-products.component.scss']
})

export class CategoryProductsComponent implements OnInit {
    selectedProduct: ProductModel;
    products: ProductModel[] = [];
    selectedCategory: CategoryModel;

    constructor(private productApiService: ProductApiService,
                private categoryService: CategoryService,
                private productService: ProductService) {

    }

    ngOnInit() {
        this.categoryService.getCategorySelectionChanged()
          .subscribe((category) => {
          this.selectedCategory = category;
          this.loadAllProductsByCategory(category.name);
        });
    }


    private loadAllProductsByCategory(categoryName: string) {
        this.productApiService.getByCategoryName(categoryName)
          .subscribe(users => { this.products = users; });
    }

    public selectProduct(product: ProductModel) {
      this.selectedProduct = product;
      this.productService.notifyProductsSelectionChanged(product);
    }
}
