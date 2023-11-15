import { ProductService } from './../Services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service_Client/cart.service';

@Component({
  selector: 'app-shoppingcard',
  templateUrl: './shoppingcard.component.html',
  styleUrls: ['./shoppingcard.component.css']
})
export class ShoppingcardComponent implements OnInit{
  currentId : any ;
  currentProduct :any;
  productsCard: any[] = [];
  grandTotal: number = 0;

  constructor(private cartService : CartService, private activatedRoute: ActivatedRoute,private servprod :ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(p:ParamMap) => {
        this.currentId =p.get('id')
        console.log(this.currentId);
        this.currentProduct=this.servprod.getProdById(this.currentId)
        console.log(this.currentProduct);
      }
     })
     this.cartService.addToCart(this.currentProduct);
     this.productsCard=this.cartService.getProd();
     this.grandTotal=this.cartService.getTotalPrice()

  }

  removeItem(product: any): void {
    this.cartService.removeItem(product);
  }

  emptyCart(): void {
    this.cartService.emptyCart();
    this.productsCard=[];


  }
  }

 /* currentId: any;
curentProduct : any;
constructor(private activatedRoute : ActivatedRoute,private productService : ProductService) {}

  ngOnInit(): void {
// bech njibou id pour un objet courant
this.activatedRoute.paramMap.subscribe({
  next:(p:ParamMap) => {
    this.currentId =p.get('id')
    console.log(this.currentId);

   this.curentProduct = this.productService.getProdById(this.currentId);
   this.products=this.productService.getProd();
  }
 })

  }
 products : any
  updateTotalPrice() {
    this.total = this.products.reduce((total:any, product:any) => {
      return total + (product.price * product.quantity);
    }, 0);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
    this.updateTotalPrice();
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  private _total = 0;*/
