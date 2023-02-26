import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Input Methods
  public numb: string = "0"
  public actvalue: string = ""
  

  //Operation function
  write(value: string) {
    
   this.actvalue = this.actvalue + value
   this.numb = this.actvalue
  }

  //Result function
  result() {
   
    this.numb = eval(this.actvalue)
    this.actvalue = this.numb

  }

  //Clear function 
    clean() {

      this.numb = "0"
      this.actvalue = this.numb
      
    }



 

  


  
}
