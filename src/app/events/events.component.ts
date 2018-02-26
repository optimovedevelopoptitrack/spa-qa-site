import {Component, OnInit} from '@angular/core';
import * as SDK from '../OptimoveSDK/OptimoveSDK';
import * as SDKListener from '../OptimoveSDK/OptimoveSDKListener';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public currTitle: string;
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() {
  }

  ngOnInit() {

    if (SDK.OptimoveSDK.wasInitialized === true) {
      SDK.OptimoveSDK.SetPageVisit(window.location.href, 'Events', 'Events');
    }
  }

  OnEvent(name: string) {
    console.log(name);
    let num : number;
    switch(name){
      case 'One':
        num = 1;
        break;
      case 'Two':
        num = 2;
        break;
      case 'Three':
        num = 3;
        break;
      case 'One':
        num = 4;
        break;
    }
    if (SDK.OptimoveSDK.wasInitialized === true) {
      SDK.OptimoveSDK.ReportEvent('set_tile_event', { 'tile_index': num, 'tile_name': name});
    }
  }

}
