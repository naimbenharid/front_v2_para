import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  currentCategory = new Category();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private categoryService: CategoryService) { }

    ngOnInit() {
      this.getCategories();
    }


    updateBrand() {
      this.categoryService.putCategory(this.currentCategory).subscribe(b =>
        {this.router.navigate(['categories'])});
      ;}


      getCategories(){
        this.categoryService.getCtegoryById(this.activatedRoute.snapshot. params['id']).subscribe(
           {
             next : ( response : Category ) => {
               this.currentCategory=response;
               console.log(this.currentCategory)
             }
           }
        )
     }
}
