import {Component, OnInit} from '@angular/core';
import * as SDK from '../OptimoveSDK/OptimoveSDK';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loginError: boolean;

  constructor() {
    this.loginError = false;
  }

  ngOnInit() {
    if( SDK.OptimoveSDK.wasInitialized === true){
      SDK.OptimoveSDK.SetPageVisit( 'HOME','HOME','HOME' );
    }
  }

  onLogin() {
    // Validate
    if (!this.email || !this.password) {
      this.loginError = true;
      return;
    }
    this.loginError = false;
    // Perform Login
  }
}
