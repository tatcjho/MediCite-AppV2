// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyCqVyOALcBuAKp04ifb0a5TDzWIi17tM6c",
    authDomain: "mediciteapp.firebaseapp.com",
    databaseURL: "https://mediciteapp.firebaseio.com",
    projectId: "mediciteapp",
    storageBucket: "mediciteapp.appspot.com",
    messagingSenderId: "300913221142",
    appId: "1:300913221142:web:91737cfde65f88f7b69f37",
    measurementId: "G-L05FK3GKQE"
  },

  credentials: {
    login : {
      userid: 'user@test.env',
      password: 'test'
    }
  },
  AGM_KEY: 'AIzaSyCjbongHh5OwOmgILPb0UP4KWOO_DcDGpg',
  NEWSAPI: {
    API_KEY: '79f891e9dc8a4c5eb39db9594339238d',
    HEADLINES_URL: 'https://newsapi.org/v2/top-headlines'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
