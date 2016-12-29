import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { routing } from './app.routing';
import { Photo365Component } from './photo-365/photo-365.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA8Q__scCWlOTFsExNo23ucsqvjtQYWREA',
  authDomain: 'website-a49d3.firebaseapp.com',
  databaseURL: 'https://website-a49d3.firebaseio.com',
  storageBucket: 'website-a49d3.appspot.com',
  messagingSenderId: '46563515907'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AboutComponent,
    Photo365Component
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
