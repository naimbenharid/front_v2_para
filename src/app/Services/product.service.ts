import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';
import { Image } from '../Models/Image';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // Replace with your server's URL
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8082/products';
  private apiUrl2 = 'http://localhost:8082/images';


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

  uploadImage(file: File, filename: string): Observable<Image>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiUrl2 + '/upload'}`;
    return this.httpClient.post<Image>(url, imageFormData);
    }
    loadImage(id: number): Observable<Image> {
    const url = `${this.apiUrl2 + '/get'}/${id}`;
    return this.httpClient.get<Image>(url);
    }

    getAllImages(): Observable<Image[]> {
      return this.httpClient.get<Image[]>(`${this.apiUrl2}/all`,httpOptions);
    }


  products = [
    {id:1,
      title: 'Protéine-Shampoo',
      description: 'Protein pour cheveux seches',
      price: 70.99 ,
      image : '../../assets/champoo.jpg',
      qte : 1
    },
    {id:2,
      title: 'Créme cheveux Homme',
      description: 'Créme facilitateur',
      price: 29.99,
      image : '../../assets/cremecheveuc.jpg',
      qte : 1


    },
    {id:3,
      title: 'Masque COCO-Soin',
      description: 'Masque pour cheveux long',
      price: 75.99,
      image : '../../assets/masqueCOCO Soin.jpg',
      qte : 1


    },
    {id:4,
      title: 'Sérum cheveux PHYTEAL',
      description: 'Sérum cheveux sec',
      price: 49.99,
      image : '../../assets/serum cheveux sec.jpg',
      qte : 1


    },
    {id:5,
      title: 'Sérum-luxiole',
      description: 'Sérum pousse pour tout type de cheveux',
      price: 90.99,
      image : '../../assets/serum lexiole.jpg',
      qte : 1


    },
    {id:6,
      title: 'Soins Protecteur',
      description: 'Soins capiliar cheveu',
      price: 59.99,
      image : '../../assets/soins_capilaire_cheveux.jpg',
      qte : 1


    },
    {id:7,
      title: 'Vitamine',
      description: 'Vitamine A-D-E pour les cheveux',
      price: 87.99,
      image : '../../assets/vitamine.jpg',
      qte : 1

    },
    {id:8,
      title: 'Capsule Vitamine',
      description: 'Vitamine H-D pour les cheveux',
      price: 87.99,
      image : '../../assets/Capsule Vitamine.jpg',
      qte : 1


    }
  ];
getProd(){
  return this.products;
}
getProdById(id : any){
return  this.products.find( e => e.id==id )
}

}
