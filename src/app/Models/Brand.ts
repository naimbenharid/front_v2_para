import { Product } from "../Models/Product";

export class Brand {
  id: number =0;
  name: string = "";
  description: string = "";
  products!: Product[];
}
