import { Component, OnInit } from '@angular/core';

import {CategoryModel} from '../../_models/category.model';
import {CategoryService} from '../../_services/api/category.service';

@Component({
    templateUrl: 'category-list.component.html',
    selector: 'app-category-list',
})

export class CategoryListComponent implements OnInit {
    selectedCategory: CategoryModel;
    categories: CategoryModel[] = [];

    constructor(private categoryService: CategoryService) {

    }

    ngOnInit() {
        this.loadAllCategories();
    }


    private loadAllCategories() {
        this.categoryService.get().subscribe(users => { this.categories = users; });
    }
}
