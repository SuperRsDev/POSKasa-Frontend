import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {CategoryModel} from '../_models/category.model';

@Injectable()
export class CategoryService {
  private categorySelectionChanged$ = new Subject<CategoryModel>();

  private lastCategorySelected: CategoryModel;

  public getCategorySelectionChanged() {
    return this.categorySelectionChanged$.asObservable();
  }

  public notifyCategoryChanged(value: CategoryModel) {
    this.lastCategorySelected = value;
    this.categorySelectionChanged$.next(value);
  }

}
