import { Category } from "./Category";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  qte: number;
//  brand: Brand; // Assurez-vous d'importer correctement le modèle Brand
 // images: Image[]; // Assurez-vous d'importer correctement le modèle Image
  category: Category; // Assurez-vous d'importer correctement le modèle Category
 // orderItems: OrderItem[];  Assurez-vous d'importer correctement le modèle OrderItem

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.price = 0;
    this.qte = 0;
   // this.brand = new Brand();
 //   this.images = [];
    this.category = new Category();
 //   this.orderItems = [];
  }
}
