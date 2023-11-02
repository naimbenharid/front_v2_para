import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Brand/brand/brand.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { AddBrandComponent } from './Brand/add-brand/add-brand.component';
import { UpdateBrandComponent } from './Brand/update-brand/update-brand.component';
import { AddOrderComponent } from './Order/add-order/add-order.component';
import { OrderComponent } from './Order/order/order.component';
import { CategoryComponent } from './Category/category/category.component';
import { HomeComponent } from './home/home.component';
import { UpdateCategoryComponent } from './Category/update-category/update-category.component';
import { UpdateOrderComponent } from './Order/update-order/update-order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { ItemproductComponent } from './itemproduct/itemproduct.component';
import { ShoppingcardComponent } from './shoppingcard/shoppingcard.component';
import { ItemComponent } from './item/item.component';
import { ProdlistComponent } from './prod/prodlist/prodlist.component';
import { AddprodComponent } from './prod/addprod/addprod.component';
import { UpdateprodComponent } from './prod/updateprod/updateprod.component';



const routes: Routes = [
  {path:"prod",component:ProdlistComponent},
  {path:"addprod",component:AddprodComponent},
  {path:"updateprod",component:UpdateprodComponent},


  {path :"orders" , component: OrderComponent},
  {path :"addorder" , component: AddOrderComponent},
  {path :"updateorder" , component: UpdateOrderComponent},

  {path :"brands" , component: BrandComponent},
  {path :"addbrand" , component: AddBrandComponent},
  {path :"updatebrand" , component: UpdateBrandComponent},


  {path :"categories" , component: CategoryComponent},
  {path :"addcategory" , component: AddCategoryComponent},
  {path :"updatecategory" , component: UpdateCategoryComponent},


  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},


  {path:"products",component:ProductComponent},
  {path:"item",component:ItemproductComponent},
  {path:"card",component:ShoppingcardComponent},


  {path:"admin",component:AdminComponent},

  {path :"" ,component:HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
