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

  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
this.products=this.cartService.getProd();

    /*
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })*/
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  products = [
    {id:1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99
    },
    {id:2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99
    },
    {
      title: 'Product 3',
      description: 'Description for Product 3',
      price: 39.99
    },
    {
      title: 'Product 4',
      description: 'Description for Product 4',
      price: 49.99
    },
    {
      title: 'Product 5',
      description: 'Description for Product 5',
      price: 59.99
    }
  ];

getProd(){
  return this.products;
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

}
