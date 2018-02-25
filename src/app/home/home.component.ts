import { Component, OnInit } from '@angular/core';
import * as SDK from '../OptimoveSDK/OptimoveSDK';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
protected optimoveSDK = new SDK.OptimoveSDK();
  constructor() { }

  ngOnInit() {


    this.optimoveSDK.loadJSResourc('http://sdk-cdn.optimove.net/websdk/sdk-v1.0.4.js', this.optimoveSDK.onLoadSDK);

  }

}
