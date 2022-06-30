import { Injectable } from '@angular/core';
import { Product } from '../products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  remToCart(product: Product) {
    this.items.pop();
  }

  getItems() {
    return this.items;
  }

  itemsCount(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
