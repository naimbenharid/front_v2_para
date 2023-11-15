
import { OrderStatus } from './OrderStatus';

export class OrderCustomer {
  id!: number;
  orderDate!: Date;
  deliveryAddress: string="";
  totalAmount!: number;
  orderStatus!: OrderStatus ;
}
