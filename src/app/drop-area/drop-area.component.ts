import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.scss']
})
export class DropAreaComponent implements OnInit {
  private itemsDropped:Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  private addDropItem(event){
  	this.itemsDropped.push(event);
  }

}
