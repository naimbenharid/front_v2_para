import { Product } from 'src/app/Models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products:any ;
  constructor(private serviceProd: ProductService){}

  ngOnInit(): void {
    this.products=this.serviceProd.getProd();  }

}

