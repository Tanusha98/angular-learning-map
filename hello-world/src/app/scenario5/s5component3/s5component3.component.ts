import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-s5component3',
  templateUrl: './s5component3.component.html',
  styleUrls: ['./s5component3.component.css']
})
export class S5component3Component implements OnInit {

  constructor() { }
  @Output() grandChildEvent= new EventEmitter<String>();
  onSubmit(grandChildValue){
    this.grandChildEvent.emit(grandChildValue);
  }
  ngOnInit() {
  }

}
