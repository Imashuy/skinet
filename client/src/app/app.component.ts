import { IPagination } from './models/pagination';
import { IProduct } from './models/product';
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  title = 'SkiNet';
  products: IProduct;

  constructor(private http: HttpClient){ }


  ngOnInit(): void {
    this.http.get('https://localhost:7146/api/products?pageSize=50').subscribe((response:IPagination) => {
      console.log(response);
  },error=> {
    console.log(error);
  });

  }
}
