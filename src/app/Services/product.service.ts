import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8082/products';

  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/all`);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/getProductById/${id}`);
  }

  getProductByCategory(category: Category): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/getProductByCategory/${category}`);
  }

  getProductByPrice(price: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/getProductByPrice/${price}`);
  }

  getProductByQte(qte: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/getProductByQte/${qte}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiUrl}/addProduct`, product);
  }

  updateProduct(id: number, updatedProduct: Product): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/updateProduct/${id}`, updatedProduct);
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/deleteProduct/${id}`);
  }
}
