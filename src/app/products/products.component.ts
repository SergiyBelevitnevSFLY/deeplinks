import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
  <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group btn-group-lg" role="group" aria-label="First group">
  <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/2">Prints 4X4</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/4">Prints 4X6</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/6">Prints 5X7</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/240">Prints Wallet</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/8">Prints 8X8</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/68">Prints 8X10</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/70">Prints 11X14</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/234">Prints 12X12</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/434">Prints 16X20</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/238">Prints 20X30</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/2148">Prints 5X15</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/2150">Prints 8X24</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/2152">Prints 12X36</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/244">Books 6X6 soft</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/242">Books 6X6 hard</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/248">Books 8X8 soft</a> 
 </button> 
 <button type="button" class="btn btn-secondary">
  <a href="shutterfly-staging://mobile/v2/products/246">Books 8x8 hard</a> 
 </button> 
 


  </div>
  </div>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}