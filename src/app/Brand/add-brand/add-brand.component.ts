import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Models/Brand';
import { Product } from 'src/app/Models/Product';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  id:number =0;
  name:string=""
  description:string=""
  brands: Brand[] = [];
  products!: Product[];

  selectedBrand!: Brand

  constructor(private brandService: BrandService,private router : Router) {}


  add() {
    let newBrand =
     {
      id: this.id ,
      name:this.name,
      description: this.description,
      products:this.products
     };

    this.brandService.createBrand(newBrand).subscribe({
      next: (response) => {
        console.log('Brand Created With success ', response);
        this.router.navigateByUrl('/brands')
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }
}
