
import {User} from './User'
import {OrderItem} from './OrderItem'
import { OrderStatus } from './OrderStatus';

export class OrderCustomer {
  id?: number=0;
  orderDate?: Date;
  deliveryAddress?: string="";
  totalAmount?: number=0;
 orderStatus?: OrderStatus  ;
  user?: User | undefined;
  orderItems?: OrderItem[];

  constructor()
  {
    this.id = 0;
    this.orderDate
    this.deliveryAddress = '';
    this.totalAmount = 0;
    this.orderStatus;
    this.user = new User();
    this.orderItems = [];
  }
}
