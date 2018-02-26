declare global {
  interface Window {
    optimoveSDK: any;

  }
}
;

import {Component, OnInit} from '@angular/core';
import * as SDK from '../OptimoveSDK/OptimoveSDK';
import * as SDKListener from '../OptimoveSDK/OptimoveSDKListener';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, SDKListener.OptimpoveSDKListner {


  static isLoaded: boolean;
  static sdkWasInitialized: boolean;
  protected static optimoveSDK: SDK.OptimoveSDK = null;

  constructor() {
    HomeComponent.isLoaded = false;
    SDK.OptimoveSDK.AddListener(HomeComponent.name, this);

  }

  static Initialize() {
    // Initialization
    HomeComponent.isLoaded = false;
    HomeComponent.sdkWasInitialized = false;
    if (HomeComponent.optimoveSDK === null) {
      HomeComponent.optimoveSDK = new SDK.OptimoveSDK();
    }

  }

  ngOnInit() {
    if (SDK.OptimoveSDK.wasInitialized === true) {
      SDK.OptimoveSDK.SetPageVisit( window.location.href, 'HOME', 'HOME');
    }

    if (HomeComponent.isLoaded === false) {

      HomeComponent.isLoaded = true;
    }

  }

  UpdateSKStatus(state: number): void {
    HomeComponent.sdkWasInitialized = (state === 1) ? true: false;
  }


}

HomeComponent.Initialize();
