import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { AppNavBarComponent } from './app-nav-bar';
import { GalleryComponent, IgnoreHiddenImagePipe, ReversePipe } from './gallery';
import { ImageDialogComponent } from './image-dialog';
import { Photo365Component } from './photo-365';

import { ImagesService } from './services/images.service';

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
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AboutComponent,
    GalleryComponent,
    IgnoreHiddenImagePipe,
    ImageDialogComponent,
    Photo365Component,
    ReversePipe,
  ],
  entryComponents: [
    ImageDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
  ],
  providers: [
    ImagesService,
  ],
})
export class AppModule { }