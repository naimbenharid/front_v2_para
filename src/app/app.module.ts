import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './Brand/brand/brand.component';
import { AddBrandComponent } from './Brand/add-brand/add-brand.component';
import { UpdateBrandComponent } from './Brand/update-brand/update-brand.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './Category/category/category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './Category/update-category/update-category.component';
import { OrderComponent } from './Order/order/order.component';
import { AddOrderComponent } from './Order/add-order/add-order.component';
import { UpdateOrderComponent } from './Order/update-order/update-order.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { ItemproductComponent } from './itemproduct/itemproduct.component';
import { ShoppingcardComponent } from './shoppingcard/shoppingcard.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ProdComponent } from './prod/prod.component';
import { UpdateprodComponent } from './prod/updateprod/updateprod.component';
import { ProdlistComponent } from './prod/prodlist/prodlist.component';
import { AddprodComponent } from './prod/addprod/addprod.component';
import { ShopComponent } from './client/shop/shop.component';
import { HeaderComponent } from './client/header/header.component';
import { CommonModule } from '@angular/common';
import { ForbbidenComponent } from './forbbiden/forbbiden/forbbiden.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    AddBrandComponent,
    UpdateBrandComponent,
    NavbarComponent,
    CategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    OrderComponent,
    AddOrderComponent,
    UpdateOrderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ProductComponent,
    ItemproductComponent,
    ShoppingcardComponent,
    FooterComponent,
    ItemComponent,
    ProdComponent,
    UpdateprodComponent,
    ProdlistComponent,
    AddprodComponent,
    ShopComponent,
    HeaderComponent,
    ForbbidenComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
