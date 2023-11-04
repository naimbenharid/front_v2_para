import { Component } from '@angular/core';
import { Brand } from 'src/app/Models/Brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  brands: Brand[] = [];
  newBrand: Brand = new Brand();
  selectedBrand: Brand | null = null;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands() {
    this.brandService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
    });
  }

  deleteBrand(id: number) {
    this.brandService.deleteBrand(id).subscribe(() => {
      this.brands = this.brands.filter((brand) => brand.id !== id);
      if (this.selectedBrand && this.selectedBrand.id === id) {
        this.selectedBrand = null;
      }
    });
  }
  delete(id:any)
  {
    return this.deleteBrand(id)
  }

  onSelect(brand: Brand) {
    this.selectedBrand = brand;
  }


}
