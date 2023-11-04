
import {User} from './User'
import {OrderItem} from './OrderItem'
export class OrderCustomer {
  id: number=0;
  orderDate: string ="";
  deliveryAddress: string ="";
  totalAmount: number=0;
  orderStatus: string="";
  user!: User;
  orderItems!: OrderItem[];
}
