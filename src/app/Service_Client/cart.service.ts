import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
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
}
