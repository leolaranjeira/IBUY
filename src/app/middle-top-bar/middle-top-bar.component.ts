import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-middle-top-bar',
  templateUrl: './middle-top-bar.component.html',
  styleUrls: ['./middle-top-bar.component.css']
})
export class MiddleTopBarComponent implements OnInit {
  products = products;

  constructor() { }
  
  ngOnInit() {
  }
}
 