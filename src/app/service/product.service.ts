import { removeSummaryDuplicates } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private list: Product[] = [
    {id: 1, name: 'Bread', price: 20, active: true},
    {id: 2, name: 'Cheese', price: 30, active: false},
    {id: 3, name: 'Water', price: 66, active: true},
    {id: 4, name: 'Milk', price: 5, active: true},
    {id: 5, name: 'Pasta', price: 98, active: false},
    {id: 6, name: 'Flour', price: 23, active: true},
    {id: 7, name: 'Nutella', price: 78, active: true},
    {id: 8, name: 'Soup', price: 98, active: false},
    {id: 9, name: 'Flower', price: 44, active: true},
    {id: 10, name: 'Vegetables', price: 32, active: false}

  ];
  list$: BehaviorSubject<Product[]> =
  new BehaviorSubject<Product[]>([]);


  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
  get(product: Product): Observable<Product | undefined> {
  return of(this.list$.value.find(item => item.id === product.id));

  }
}
