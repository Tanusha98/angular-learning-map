import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s6component3',
  templateUrl: './s6component3.component.html',
  styleUrls: ['./s6component3.component.css']
})
export class S6component3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() child1Event = new EventEmitter<String>();
  onSubmit(child1Value) {
    this.child1Event.emit(child1Value);
  }
}
