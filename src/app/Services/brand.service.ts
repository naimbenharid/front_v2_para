import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../Models/Brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl ='http://localhost:8082/brands' ;
  constructor( private http : HttpClient) {


   }


  createBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(`${this.apiUrl}/addBrand`, brand);
  }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/getAllBrands`);
  }

  getBrandById(id: any): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/getBrand/${id}`);
  }

  updateBrand(updatedBrand: Brand): Observable<Brand> {
    return this.http.put<Brand>(`${this.apiUrl}/update`, updatedBrand);
  }

  deleteBrand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
