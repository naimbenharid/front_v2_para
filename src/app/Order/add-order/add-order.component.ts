import { OrderStatus } from './../../Models/OrderStatus';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderCustomer } from 'src/app/Models/OrderCustomer';
import { OrderItem } from 'src/app/Models/OrderItem';
import { User } from 'src/app/Models/User';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

 users!: User
  /*orderItems!:OrderItem[]=[];*/
  newOrder = new OrderCustomer();

 OrderStatus = Object.values(OrderStatus);
 orderStatu?:OrderStatus;

 order: OrderCustomer = new OrderCustomer();

  constructor( private orderService: OrderService, private router : Router ) {}

  ngOnInit(): void
  {

  }
  add(){
    console.log(this.order);
    this.orderService.postOrder(this.order).subscribe(
      (response) => {
        console.log('Commande ajoutée avec succès', response);
        this.order = new OrderCustomer();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la commande', error);
      }
    );
  }


  /*
  add() {
let newOrder =
     {
      id:this.id = 0;
      orderDate: this.orderDate
      deliveryAddress: this.deliveryAddress = '';
      totalAmount:  this.totalAmount = 0;
      orderStatus:this.orderStatus = OrderStatus.PENDING; // Vous pouvez utiliser un autre statut par défaut si nécessaire
      this.user = new User();
      this.orderItems = [];

     };

console.log(newOrder)
    this.oderService.postOrder(newOrder).subscribe({
      next: (response) => {
        console.log('order Created With success ', response);
        this.router.navigateByUrl('/orders')
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
}*/

}
