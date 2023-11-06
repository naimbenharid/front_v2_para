import {Product} from '../Models/Product'
import {OrderCustomer} from '../Models/OrderCustomer'
export class OrderItem { //detaille de commande 
  id: number = 0;
  quantity: number =0;
  product!: Product;
  order!: OrderCustomer;
}
