import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  id:number =0;
  name:string=""
  description:string=""
  products!: Product[];

  selectedCategory: Category | null = null

  constructor(private categoryService: CategoryService,private router : Router) {}


  add() {
    let newCategory =
     {
      id: this.id ,
      name:this.name,
      description: this.description,
      products:this.products
     };
console.log(newCategory)
    this.categoryService.postCategory(newCategory).subscribe({
      next: (response) => {
        console.log('Category Created With success ', response);
        this.router.navigateByUrl('/categories')
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
}}
