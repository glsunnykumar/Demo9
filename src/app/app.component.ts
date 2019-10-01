import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';
  num1 : number;
  num2 : number;
  result : number;


  add(){
    this.result = this.num1 + this.num2;
  }

  substract()
  {
    this.result = this.num1 - this.num2;
  }

  Multiply(){
    this.result = this.num1 * this.num2;
  }

  Divide(){
    this.result = this.num1 / this.num2;
  }

}
