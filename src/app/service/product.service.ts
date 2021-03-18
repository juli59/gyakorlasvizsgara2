import { HttpClient } from '@angular/common/http';
import { removeSummaryDuplicates } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = `http://localhost:3000/products`;

  // private list: Product[] = [
  //   {id: 1, name: 'Bread', seoName:'italian', price: 20, active: true},
  //   {id: 2, name: 'Cheese', seoName:'hungarian', price: 30, active: false},
  //   {id: 3, name: 'Water', seoName:'fresh', price: 66, active: true},
  //   {id: 4, name: 'Milk', seoName:'cow', price: 5, active: true},
  //   {id: 5, name: 'Pasta', seoName:'crispy', price: 98, active: false},
  //   {id: 6, name: 'Flour', seoName:'white', price: 23, active: true},
  //   {id: 7, name: 'Nutella', seoName:'brown', price: 78, active: true},
  //   {id: 8, name: 'Soup', seoName:'goulash', price: 98, active: false},
  //   {id: 9, name: 'Flower', seoName:'nice', price: 44, active: true},
  //   {id: 10, name: 'Vegetables', seoName:'tomato', price: 32, active: false}

  // ];
  list$: BehaviorSubject<Product[]> =
  new BehaviorSubject<Product[]>([]);


  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe(
      products =>this.list$.next(products)
    );

  }
  get(id: number | string): Observable<Product | undefined> {
   id= parseInt(('' + id), 10);
  return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product): void {
    this.http.post<Product>(
      `${this.apiUrl}`,
      product
      ).subscribe(
        () => this.getAll()
      );
  }
  update(product: Product): void {
    this.http.patch<Product>(
      `${this.apiUrl}/${product.id}`,
      product
      ).subscribe(
        () => this.getAll()
      );
  }
  remove(product: Product): void {
    this.http.delete<Product>(
      `${this.apiUrl}/${product.id}`,
       ).subscribe(
        () => this.getAll()
      );
  }

  getBySeoName(name: string): Observable<Product | undefined> {
  return of(this.list$.value.find(item => item.seoName === name));
  }
}
