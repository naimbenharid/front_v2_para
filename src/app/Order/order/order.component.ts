import { Component } from '@angular/core';
import { OrderCustomer } from 'src/app/Models/OrderCustomer';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders: OrderCustomer[] = [];
  newCategory: OrderCustomer = new OrderCustomer();
  selectedOrder: OrderCustomer | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((order) => {
      this.orders = order;
    });
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.orders = this.orders.filter((order) => order.id !== id);
      if (this.selectedOrder && this.selectedOrder.id === id) {
        this.selectedOrder = null;
      }
    });
  }
  delete(id:any)
  {
    return this.deleteOrder(id)
  }

  onSelect(cat: OrderCustomer) {
    this.selectedOrder =cat;
  }

}
