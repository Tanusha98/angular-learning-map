import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s4component1',
  templateUrl: './s4component1.component.html',
  styleUrls: ['./s4component1.component.css']
})
export class S4component1Component implements OnInit {

  constructor() { }
  parentValue:string;

  ngOnInit() {
  }

  recieveValue(value :string){
  this.parentValue=value;
  }
  display(){
    return this.parentValue;
  }
}
