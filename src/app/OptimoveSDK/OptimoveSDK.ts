declare global {
  interface Window {
    optimoveSDK: any;

  }
}
;

export class OptimoveSDK {
  protected static sdkWin: Window;
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
    // let url : string = self.document.location.href;
    // let host: string =  self.document.location.origin;
    // let splited : string[]=  url.split(host);
    // let pageName : string= splited[1];
    // let pageTitle : string = pageName.slice(1, pageName.length);
    // if(pageTitle == "")
    //   pageTitle = "Home - Hackathon Starter";
    //

  }


  static InitalizeStatic(): void {

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
      OptimoveSDK.sdkWin.optimoveSDK.API.reportEvent(eventName, parametrs);
    }
  }


  public static SetUserId(eventName: string, parametrs: any): void {
    if (typeof window.optimoveSDK != 'undefined') {
      OptimoveSDK.sdkWin.optimoveSDK.API.setUserId(eventName, parametrs);
    }
  }
}

OptimoveSDK.InitalizeStatic();
