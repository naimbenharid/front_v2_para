import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    {
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99
    },
    {
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

}
