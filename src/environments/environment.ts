// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCZCM3Msbku_lHRVk-OERLntC1kn0oVSYY",
    authDomain: "books-f81ee.firebaseapp.com",
    databaseURL: "https://books-f81ee.firebaseio.com",
    projectId: "books-f81ee",
    storageBucket: "books-f81ee.appspot.com",
    messagingSenderId: "1051643817734"
  }
};