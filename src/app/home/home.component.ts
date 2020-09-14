import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

 <div class="btn-group btn-group-toggle" data-toggle="buttons">
 <label class="btn btn-primary btn-lg">
   <input type="radio" name="options" id="option1" routerLink = "/ios" aria-pressed="true"> IOS
 </label>
 <label class="btn btn-secondary btn-lg">
   <input type="radio" name="options" id="option2" routerLink = "/android" aria-pressed="true"> ANDROID
 </label>
 <label class="btn btn-secondary btn-lg">
 <input type="radio" name="options" id="option3" routerLink = "/categoties" aria-pressed="true"> Categories
</label>
<label class="btn btn-secondary btn-lg">
 <input type="radio" name="options" id="option4" routerLink = "/products" aria-pressed="true"> Products
</label>
</div>




  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
