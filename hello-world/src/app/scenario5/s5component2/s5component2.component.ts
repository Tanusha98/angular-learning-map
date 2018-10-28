import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-s5component2',
  templateUrl: './s5component2.component.html',
  styleUrls: ['./s5component2.component.css']
})
export class S5component2Component implements OnInit {

  constructor() { }
  @Output() parentEvent=new EventEmitter<String>();

  ngOnInit() {
  }
  transfer($event){
    this.parentEvent.emit($event);
  }
}
