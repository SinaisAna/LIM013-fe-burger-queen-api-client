import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: any;

  constructor() { }

  ngOnInit(): void {
    this.getProducts("desa");
  }
  
  clickfood(){
    alert("toy funcionando vieja lesbiana");
  }

  getProducts(typeSelect): void {
    // this.productsService.getListProduct().subscribe(
      // response => {
         this.products = [{name: "esauDesa",price:2000,type:"desa"},{name: "esau",price:2000,type:"nodesa"}];
         const breakfast = this.products.filter(products => products.type === typeSelect);
        this.products = breakfast;
      // }
    // );
    }


}
