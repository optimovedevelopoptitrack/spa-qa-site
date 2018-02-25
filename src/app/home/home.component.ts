import { Component, OnInit } from '@angular/core';
import * as SDK from '../OptimoveSDK/OptimoveSDK';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static isLoaded: boolean;
protected optimoveSDK = new SDK.OptimoveSDK();
  constructor() {
    HomeComponent.isLoaded = false;
  }

  static Initialize() {
    // Initialization
    HomeComponent.isLoaded = false;
  }

  ngOnInit() {

  if(HomeComponent.isLoaded === false){
    this.optimoveSDK.loadJSResourc('http://sdk-cdn.optimove.net/websdk/sdk-v1.0.4.js', this.optimoveSDK.onLoadSDK);
    HomeComponent.isLoaded = true;
  }

  }



}
  HomeComponent.Initialize();
