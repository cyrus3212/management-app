import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private itemsToDrop:Array<Object> = [
		{
			name: 'Item to drop 1',
			content: 'desctiption 1'
		},
		{
			name: 'Item to drop 2',
			content: 'desctiption 2'
		},
		{
			name: 'Item to drop 3',
			content: 'desctiption 3'
		},
	]
  constructor() { }

  ngOnInit() {
  }
  private releaseDrop(event){
  	let index = this.itemsToDrop.indexOf(event);
  	if (index >= 0){
  		this.itemsToDrop.splice(index,1);
  	}
  }

}
