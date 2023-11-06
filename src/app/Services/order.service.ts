import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderCustomer } from '../Models/OrderCustomer';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private BaseUrl ='http://localhost:8082/orders' ;
  constructor( private http : HttpClient) { }
  //Post :
  postOrder(order: OrderCustomer): Observable<OrderCustomer> {
    return this.http.post<OrderCustomer>(`${this.BaseUrl}/addOrder`, order);
  }
  //Put Category :
  putOrder(orderUpdate :OrderCustomer) :Observable<OrderCustomer>
  {
    return this.http.put<OrderCustomer>(`${this.BaseUrl}/update`, orderUpdate)
  }
  //Delete  :
  deleteOrder(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.BaseUrl}/deleteOrder/${id}`);
  }
  // Get All  :
  getAllOrders(): Observable<OrderCustomer[]> {
    return this.http.get<OrderCustomer[]> (`${this.BaseUrl}/getAllOrders`);
  }

  // Get  by ID :
  getCtegoryById(id : number ): Observable<OrderCustomer>{
    return this.http.get<OrderCustomer>(`${this.BaseUrl}/getCategoryById/${id}`) ;

}
}
