import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-itemproduct',
  templateUrl: './itemproduct.component.html',
  styleUrls: ['./itemproduct.component.css']
})
export class ItemproductComponent implements OnInit {
  currentId : any ;
  currentProduct : any ;
constructor(private activatedRoute:ActivatedRoute ,private servprod : ProductService){}

  ngOnInit(): void {

// bech njibou id pour un objet courant
 this.activatedRoute.paramMap.subscribe({
  next:(p:ParamMap) => {
    this.currentId =p.get('id')
    console.log(this.currentId);
    this.currentProduct=this.servprod.getProdById(this.currentId)

    console.log(this.currentProduct);
  }
 })

}


 }
