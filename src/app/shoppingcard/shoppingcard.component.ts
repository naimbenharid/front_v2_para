import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppingcard',
  templateUrl: './shoppingcard.component.html',
  styleUrls: ['./shoppingcard.component.css']
})
export class ShoppingcardComponent {
  products = [
    { name: 'Product 1', imageUrl: '../../assets/p1.jpg', price: 10.00, quantity: 1 },
    { name: 'Product 2', imageUrl: '../../assets/p2.jpg', price: 15.00, quantity: 1 },
  ];

  updateTotalPrice() {
    this.total = this.products.reduce((total, product) => {
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

  private _total = 0;

}
