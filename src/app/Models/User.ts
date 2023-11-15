import { OrderCustomer } from "./OrderCustomer";

export class User {
  id!: number;
  username: string="";
  lastname:string="";
  password: string ="";
  useremail: string ="";
  orders!: OrderCustomer[];
  roles:string[]=["ADMIN","USER"];
}
