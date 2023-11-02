import { Product } from "./Product";
export class Category {
    id: number;
    name: string;
    description: string;
    products: Product[];
  
    constructor() {
      this.id = 0;
      this.name = '';
      this.description = '';
      this.products = [];
    }
  }
  