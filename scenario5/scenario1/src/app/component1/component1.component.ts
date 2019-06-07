import { Component, OnInit} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
    
  styles: []
})
export class Component1Component implements OnInit {

  constructor() { }
 

 

  ngOnInit() {
  }
  display(){
    console.log("helloo");
    
  }

}
