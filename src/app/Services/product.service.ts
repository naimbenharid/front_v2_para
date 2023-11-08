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
    return this.httpClient.post<Product>(`${this.apiUrl}/addProduct`,product);
  }

  updateProduct(id: number, updatedProduct: Product): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/updateProduct/${id}`, updatedProduct);
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/deleteProduct/${id}`);
  }

  products = [
    {id:1,
      title: 'Protéine-Shampoo',
      description: 'Protein pour cheveux seches',
      price: 70.99 ,
      image : '../../assets/champoo.jpg'
    },
    {id:2,
      title: 'Créme cheveux Homme',
      description: 'Créme facilitateur',
      price: 29.99,
      image : '../../assets/cremecheveuc.jpg'

    },
    {id:3,
      title: 'Masque COCO-Soin',
      description: 'Masque pour cheveux long',
      price: 75.99,
      image : '../../assets/masqueCOCO Soin.jpg'

    },
    {id:4,
      title: 'Sérum cheveux PHYTEAL',
      description: 'Sérum cheveux sec',
      price: 49.99,
      image : '../../assets/serum cheveux sec.jpg'

    },
    {id:5,
      title: 'Sérum-luxiole',
      description: 'Sérum pousse pour tout type de cheveux',
      price: 90.99,
      image : '../../assets/serum lexiole.jpg'

    },
    {id:6,
      title: 'Soins Protecteur',
      description: 'Soins capiliar cheveu',
      price: 59.99,
      image : '../../assets/soins_capilaire_cheveux.jpg'

    },
    {id:7,
      title: 'Vitamine',
      description: 'Vitamine A-D-E pour les cheveux',
      price: 87.99,
      image : '../../assets/vitamine.jpg'
    },
    {id:8,
      title: 'Capsule Vitamine',
      description: 'Vitamine H-D pour les cheveux',
      price: 87.99,
      image : '../../assets/Capsule Vitamine.jpg'

    }
  ];
getProd(){
  return this.products;
}
getProdById(id : any){
return  this.products.find( e => e.id==id )
}

}
