import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import 'hammerjs';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { AppNavBarComponent } from './app-nav-bar';
import { GalleryComponent, IgnoreHiddenImagePipe, ReversePipe } from './gallery';
import { ImageDialogComponent } from './image-dialog';
import { ManageGalleryComponent } from './manage-gallery';
import { Photo365Component } from './photo-365';

import { ImagesService } from './services/images.service';
import { reducer, GalleryService } from './store';

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
    ManageGalleryComponent,
    Photo365Component,
    ReversePipe,
  ],
  entryComponents: [
    ImageDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
    RouterModule.forRoot(routing),
    StoreModule.provideStore(reducer),
  ],
  providers: [
    GalleryService,
    ImagesService,
  ],
})
export class AppModule { }