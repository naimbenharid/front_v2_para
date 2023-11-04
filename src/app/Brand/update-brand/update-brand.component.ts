import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/Brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent {
  currentBrand = new Brand();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private brandService: BrandService) { }

    ngOnInit() {
      this.getBrand();
    }


    updateBrand() {
      this.brandService.updateBrand(this.currentBrand).subscribe(b =>
        {this.router.navigate(['brands'])});
      ;}


      getBrand(){
        this.brandService.getBrandById(this.activatedRoute.snapshot. params['id']).subscribe(
           {
             next : ( response : Brand ) => {
               this.currentBrand=response;
               console.log(this.currentBrand)
             }
           }
        )
     }

}
