import { Component , OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories : Category[] =[] ;
  newCategoryForm: Category = { name: '', description: '' , id :0, products :[] }; 
  updatedCategoryForm: Category = { name: '', description: '' , id :0, products :[] }; 
  deleteCategoryId: number = 0; 
  constructor( private categoryService : CategoryService){}


 ngOnInit(): void {
   this.getAllCategories();
 }

 getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (result) =>{
        this.categories=result;
        console.log(result);
        
      } ,
      (error) =>{
        console.error('Une erreur s\'est produite lors du chargement des catégories : ', error);
      }

    )
 }
  addCatgeory(newCat :Category) : void{
    this.categoryService.postCategory(newCat).subscribe(
      (result) =>{
        this.categories.push(result);
        console.log(this.categories);
        
      } ,
      (error) => {
        console.error('Une erreur s\'est produite lors de la création de la catégorie : ', error);
      }
    ); 
  }
  updateCategory(updatedCategory : Category) :void{
    this.categoryService.putCategory(updatedCategory .id, updatedCategory).subscribe(
      (result)=>{
        const index = this.categories.findIndex((c) => c.id === updatedCategory.id);
        if (index !== -1) {
          this.categories[index] = result;
        }
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la mise à jour de la catégorie : ', error);
        }
      );
  
    }

    deleteCategory(id: number): void {
      this.categoryService.deleteCtegory(id).subscribe(
        () => {
       
          this.categories = this.categories.filter((c) => c.id !== id);
          console.log(this.categories);
          

        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la suppression de la catégorie : ', error);
        }
      );
    }
  
  }

