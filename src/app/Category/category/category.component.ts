import { Component , OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Category = new Category();
  selectedCategory: Category | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((cat) => {
      this.categories = cat;
    });
  }

  deleteBrand(id: number) {
    this.categoryService.deleteCtegory(id).subscribe(() => {
      this.categories = this.categories.filter((cat) => cat.id !== id);
      if (this.selectedCategory && this.selectedCategory.id === id) {
        this.selectedCategory = null;
      }
    });
  }
  delete(id:any)
  {
    return this.deleteBrand(id)
  }

  onSelect(cat: Category) {
    this.selectedCategory =cat;
  }


}

