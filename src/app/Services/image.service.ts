import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './../Models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'http://localhost:8082/images'; // Remplacez par l'URL de votre API Spring

  constructor(private http: HttpClient) { }

  // Créer une image
  createImage(image: Image): Observable<Image> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Image>(`${this.baseUrl}/addImage`, image, { headers });
  }

  // Obtenir toutes les images
  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/getAllImages`);
  }

  // Obtenir une image par ID
  getImageById(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.baseUrl}/getImage/${id}`);
  }

  // Obtenir les images par ID de produit
  getImagesByProduct(productId: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/getImagesByProduct/${productId}`);
  }

  // Mettre à jour une image
  updateImage(id: number, updatedImage: Image): Observable<Image> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Image>(`${this.baseUrl}/UpdateImage/${id}`, updatedImage, { headers });
  }

  // Supprimer une image
  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteImage/${id}`);
  }
}
