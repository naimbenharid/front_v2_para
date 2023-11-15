import { ImageService } from './../../Services/image.service';
import { Product } from './../../Models/Product';
import { Category } from './../../Models/Category';
import { Brand } from './../../Models/Brand';
import { Component } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { Image } from 'src/app/Models/Image';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent {

  uploadedImage!: File;
  imagePath: any;

  categories: Category[] = [];
  selectedCategory : any;
  newCategory =new Category();

 brands: Brand[] = [];
 selectedBrand : any;
 newBrand = new Brand();

 images : Image[]=[]
 selectedImage :any ;
 newImage =new Image();

  products!: Product[];
  newProduct: Product = new Product();

  constructor(private  brandService : BrandService,
              private categoryService :CategoryService,
              private productService:ProductService,
              private router : Router)  {}


  ngOnInit(): void
    {
      this.getBrands();
      this.getCategories();
      this.getImages();

    }

  addProduct ()
    {this.productService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
      this.newProduct.image=img;
      this.newProduct.category=this.selectedCategory;
      this.newProduct.brand=this.selectedBrand;
      console.log('Catégorie sélectionnée dans addProduct :', this.newProduct);
      this.productService.createProduct(this.newProduct).subscribe(v => {
        console.log(v) ;
        console.log(this.selectedImage);
      this.router.navigate(['/prod']);
      });});
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

getImages()
   {
     this.productService.getAllImages().subscribe(image =>
       {
       this.images = image;
       console.log(image);
       })
       this.productService.getAllImages();
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

    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }
}
