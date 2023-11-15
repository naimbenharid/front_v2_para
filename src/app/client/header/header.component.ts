import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service_Client/auth.service';
import { CartService } from 'src/app/Service_Client/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService, public authService :AuthService) { }
/*
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
*/
OnLogout(){}
}
