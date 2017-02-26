import { AuthProviders, AuthMethods } from 'angularfire2';

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyA8Q__scCWlOTFsExNo23ucsqvjtQYWREA',
    authDomain: 'website-a49d3.firebaseapp.com',
    databaseURL: 'https://website-a49d3.firebaseio.com',
    storageBucket: 'website-a49d3.appspot.com',
  },
  firebaseAuth: {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
  }
};
