import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';

import { environment } from '../environments/environment';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import * as components from './components';
import * as containers from './containers';
import { GalleryEffects } from './effects/gallery.effects';

import { reducer, GalleryService } from './store';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    components.AddImageDialogComponent,
    components.AppNavBarComponent,
    components.GalleryComponent,
    components.IgnoreHiddenImagePipe,
    components.ImageDialogComponent,
    components.ReversePipe,
    containers.AboutComponent,
    containers.ManageGalleryComponent,
    containers.Photo365Component,
  ],
  entryComponents: [
    components.AddImageDialogComponent,
    components.ImageDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, environment.firebaseAuth),
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgxDatatableModule,
    RouterModule.forRoot(routing),
    StoreModule.provideStore(reducer),
    EffectsModule.run(GalleryEffects),
  ],
  providers: [
    GalleryService,
  ],
})
export class AppModule { }