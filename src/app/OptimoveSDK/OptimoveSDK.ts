import {OptimpoveSDKListner} from './OptimoveSDKListener';
import * as SDKListener from './OptimoveSDKListener';

declare global {
  interface Window {
    optimoveSDK: any;

  }
}
;

export class OptimoveSDK {
  protected static sdkWin: Window;
  protected static mapper: Map<string, OptimpoveSDKListner> = null;
  public static wasInitialized: boolean = false;

  constructor() {

  }

  static loadJSResourc(resourceURL: string, callback) {
    if (resourceURL != null) {
      const d = document;
      const g = d.createElement('script');
      const s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript';
      g.async = true;
      g.defer = true;
      g.src = resourceURL;
      g.onload = callback;
      s.parentNode.insertBefore(g, s);
    }
  };

  static onLoadSDK() {
    console.log('called onSDKLoad');
    const token: string = 'QA';
    const configVersion: string = '1.0.1';

    if (typeof window.optimoveSDK != 'undefined') {
      OptimoveSDK.sdkWin = window;
      window.optimoveSDK.initialize(token, configVersion, function (status) {
        OptimoveSDK.onSDKInitialized(status);
      }, 'info');
    }

  }

  static onSDKInitialized(status: boolean) {
    console.log(`onSDKInitialized : wasInitialized= ${status}`);

    OptimoveSDK.wasInitialized = status;


    OptimoveSDK.mapper.forEach(function (listener, key) {
      listener.UpdateSKStatus((status === true) ? 1 : 0);

    });


  }

  public static AddListener(name: string, listner: SDKListener.OptimpoveSDKListner): void {

    OptimoveSDK.mapper.set(name, listner);
  }


  static InitalizeStatic(): void {

    OptimoveSDK.mapper = new Map();
    if (OptimoveSDK.wasInitialized === false && typeof window.optimoveSDK === 'undefined') {

      OptimoveSDK.loadJSResourc('http://sdk-cdn.optimove.net/websdk/sdk-v1.0.4.js', this.onLoadSDK);

    }
  }


  public static SetPageVisit(url: string, name: string, catgory: string): void {
    if (typeof window.optimoveSDK != 'undefined') {
      window.optimoveSDK.API.setPageVisit(window.location.href, 'start', 'mycategory');
    }
  }


  public static ReportEvent(eventName: string, parametrs: any): void {
    if (typeof window.optimoveSDK != 'undefined') {
      window.optimoveSDK.API.reportEvent(eventName, parametrs);
    }
  }


  public static SetUserId(user: string): void {
    if (typeof window.optimoveSDK != 'undefined') {
      window.optimoveSDK.API.setUserId(user);
    }
  }
}

OptimoveSDK.InitalizeStatic();
