declare global {
  interface Window {
    optimoveSDK: any;
    CustomString: string;
  }
};

export class OptimoveSDK {


  constructor(){

  }

  public loadJSResourc(resourceURL: string, callback) {
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

  public  onLoadSDK() {
    console.log('called onSDKLoad');
    const token:string= 'QA';
    const configVersion :string= '1.0.1';
    window.CustomString = "TypeScript";
    if(typeof window['optimoveSDK'] != 'undefined'){
      window.optimoveSDK.initialize(token, configVersion, function(status){
        OptimoveSDK.onSDKInitialized(status);
      }, 'info');
    }

  }

  static  onSDKInitialized(status: boolean) {
    console.log(`testing my call back status = ${status}`);

    let url : string = self.document.location.href;
    let host: string =  self.document.location.origin;
    let splited : string[]=  url.split(host);
    let pageName : string= splited[1];
    let pageTitle : string = pageName.slice(1, pageName.length);
    if(pageTitle == "")
      pageTitle = "Home - Hackathon Starter";

    window.optimoveSDK.API.setPageVisit( window.location.href, pageTitle, 'mycategory');
  }

}
