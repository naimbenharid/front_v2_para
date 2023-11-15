import { Brand } from "./Brand";
import { Category } from "./Category";
import { Image } from "./Image";

export class Product {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  qte!: number;
  category!: Category;
  brand!:Brand;
  image! : Image;
  imageStr!:string;


}
