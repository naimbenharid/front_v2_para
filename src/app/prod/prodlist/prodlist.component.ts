import { Component } from '@angular/core';
import { Brand } from 'src/app/Models/Brand';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent {
  products: Product[] = [];
  categories:Category [] = [];
  brands: Brand[] = [];

  newProduct: Product = new Product();

  selectedProduct: Product | null = null;


  constructor(private productService: ProductService , private categoryService :CategoryService) {}

  ngOnInit(): void {
    this.getAllProducts();

        }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((prod) => {
      this.products = prod;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((prod) => prod.id !== id);
      if (this.selectedProduct && this.selectedProduct.id === id) {
        this.selectedProduct = null;
      }
    });
  }
  delete(id:any)
  {
    return this.deleteProduct(id)
  }

  onSelect(cat: Product) {
    this.selectedProduct =cat;
  }



}
