import { Product } from './../../Models/Product';
import { Category } from './../../Models/Category';
import { Brand } from './../../Models/Brand';
import { Component } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent {

  newBrand = new Brand();
  newCategory =new Category();
 // newProduct =new Product();
  selectedCategoryId?: number ;
  selectedBrandId?: number;

  products!: Product[];


  newProduct: Product = new Product(); // Initialisez un nouvel objet Product
  categories: Category[] = []; // Initialisez la liste des catégories
  brands: Brand[] = [];


  constructor(private  brandService : BrandService,
              private categoryService :CategoryService,
              private productService:ProductService,
              private router : Router)  {}

  onCategorySelect(selectedValue: any)
    {
    console.log('Catégorie sélectionnée :', selectedValue);
    this.newProduct.category = selectedValue;
    }


  ngOnInit(): void
    {
      this.getBrands();
      this.getCategories();
    }

  addProduct ()
    {
      console.log('Catégorie sélectionnée dans addProduct :', this.newProduct.category);
      this.productService.createProduct(this.newProduct).subscribe(v => {
      console.log(v);
      this.router.navigate(['/prod']);
      });
   }



   getBrands()
   {
     this.brandService.getAllBrands().subscribe(brand =>
       {
       this.brands = brand;
       console.log(brand);
       })
       this.brandService.getAllBrands();
}

  getCategories()
    {
      this.categoryService.getAllCategories().subscribe(cat =>
        {
        this.categories = cat;
        console.log(cat);
        })
        this.categoryService.getAllCategories();
    }
}
