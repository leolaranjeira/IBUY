import { Component } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor( 
    private cartService: CartService
    ){}

  products = products;

  share() {
    window.alert('Produto Compartilhado!');
  }

  onNotify(){
    window.alert('Você será notificado quando o produto estiver disponível');
  }

  addToCart(product) {
    window.alert('Produto adicionado no carrinho!');
    this.cartService.addToCart(product);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/