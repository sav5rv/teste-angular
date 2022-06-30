import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService,private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  ngOnInit(): void {
  }

}
