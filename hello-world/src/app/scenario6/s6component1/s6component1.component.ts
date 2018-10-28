import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s6component1',
  templateUrl: './s6component1.component.html',
  styleUrls: ['./s6component1.component.css']
})
export class S6component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  parentValue='';
  recieve($event){
    this.parentValue=$event;
  }
}
