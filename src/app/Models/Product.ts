import { Brand } from "./Brand";
import { Category } from "./Category";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  qte: number;
  category?: Category[];
  brand?:Brand[];
//  image:Image;
//  brand: Brand; // Assurez-vous d'importer correctement le modèle Brand
 // images: Image[]; // Assurez-vous d'importer correctement le modèle Image
   // Assurez-vous d'importer correctement le modèle Category
 // orderItems: OrderItem[];  Assurez-vous d'importer correctement le modèle OrderItem

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.price = 0;
    this.qte = 0;
   // this.image = new Image();
  }
}
