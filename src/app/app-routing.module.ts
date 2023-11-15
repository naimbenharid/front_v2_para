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
import { CartComponent } from './client/cart/cart.component';
import { ShopComponent } from './client/shop/shop.component';
import { HeaderComponent } from './client/header/header.component';
import { ProduitGuard } from './produit.guard';
import { ForbbidenComponent } from './forbbiden/forbbiden/forbbiden.component';



const routes: Routes = [
  {path:"prod",component:ProdlistComponent},
  {path:"addprod",component:AddprodComponent,canActivate:[ProduitGuard]},
  {path:"updateprod/:id",component:UpdateprodComponent,canActivate:[ProduitGuard]},


  {path :"orders" , component: OrderComponent,},
  {path :"addorder" , component: AddOrderComponent,canActivate:[ProduitGuard]},
  {path :"updateorder/:id" , component: UpdateOrderComponent,canActivate:[ProduitGuard]},

  {path :"brands" , component: BrandComponent},
  {path :"addbrand" , component: AddBrandComponent,canActivate:[ProduitGuard]},
  {path :"updatebrand/:id" , component: UpdateBrandComponent,canActivate:[ProduitGuard]},


  {path :"categories" , component: CategoryComponent},
  {path :"addcategory" , component: AddCategoryComponent,canActivate:[ProduitGuard]},
  {path :"updatecategory/:id" , component: UpdateCategoryComponent,canActivate:[ProduitGuard]},


  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},


  {path:"products",component:ProductComponent},
  {path:"item/:id",component:ItemproductComponent},
  {path:"card/:id",component:ShoppingcardComponent},

  {path:"forbidden",component:ForbbidenComponent},
  {path:"admin",component:AdminComponent},

  {path :"" ,component:HomeComponent },
  {path:"header",component:HeaderComponent},


/*
  {path:"cart",component:CartComponent},
  {path:"shopo",component:ShopComponent},

*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
