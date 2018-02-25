declare global {
  interface Window {
    optimoveSDK: any;

  }
};

import { Component, OnInit } from '@angular/core';
import * as SDK from '../OptimoveSDK/OptimoveSDK';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static isLoaded: boolean;
protected static optimoveSDK: SDK.OptimoveSDK = null;
  constructor() {
    HomeComponent.isLoaded = false;
    if(HomeComponent.optimoveSDK === null){
      HomeComponent.optimoveSDK = new SDK.OptimoveSDK();
    }
  }

  static Initialize() {
    // Initialization
    HomeComponent.isLoaded = false;
  }

  ngOnInit() {
    if( SDK.OptimoveSDK.wasInitialized === true){
      SDK.OptimoveSDK.SetPageVisit('HOME','HOME','HOME' );
    }

  if(HomeComponent.isLoaded === false ){

    HomeComponent.isLoaded = true;
  }

  }



}
  HomeComponent.Initialize();
