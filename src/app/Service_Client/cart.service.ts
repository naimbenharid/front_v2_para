import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products:any[]=[];
 // public products$: Observable<any[]> = this.products.asObservable();

  constructor() { }

  // Méthode pour ajouter un produit au panier
  addToCart(product: any): void {
    console.log(this.products);
    this.products.push(product);
  }

  // Méthode pour vider le panier
  emptyCart(): void {
    this.products=[];
  }

  // Méthode pour supprimer un produit du panier
  removeItem(product: any): void {
    let index = this.products.indexOf(product);
    if(index !== -1){
      this.products.splice(index,1)
    }
  }

  // Méthode pour calculer le total des prix des produits dans le panier
  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + (product.qte * product.price), 0);
  }



getProd(){
  return this.products;
}
}
