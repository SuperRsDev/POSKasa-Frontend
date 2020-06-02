import { Component, OnInit } from '@angular/core';

import {CategoryModel} from '../../_models/category.model';
import {CategoryApiService} from '../../_services/api/category-api.service';
import {CategoryService} from '../../_services/category.service';

@Component({
    templateUrl: 'category-list.component.html',
    selector: 'app-category-list',
    styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit {
    selectedCategory: CategoryModel;
    categories: CategoryModel[] = [];
    searchText: string = null;
    categoriesSearchText: string = null;

    constructor(private categoryApiService: CategoryApiService,
                private categoryService: CategoryService) {

    }

    ngOnInit() {
        this.loadAllCategories();
    }


    private loadAllCategories() {
        this.categoryApiService.get().subscribe(users => {
          this.categories = users;
          if (this.categories && this.categories.length > 0) {
            this.selectCategory(this.categories[0]);
          }
        });
    }

    public selectCategory(category: CategoryModel) {
      this.selectedCategory = category;
      this.categoryService.notifyCategoryChanged(category);
    }

    public searchCategories() {
      this.categoriesSearchText = this.searchText;
    }

    public clearText() {
      this.categoriesSearchText = null;
      this.searchText = null;
    }
}
