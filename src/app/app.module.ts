import 'hammerjs';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AngularFireService } from './angularfire.service';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import * as components from './components';
import * as containers from './containers';
import { GalleryEffects } from './effects/gallery.effects';
import { ManageEffects } from './effects/manage.effects';
import { GalleryService, OverlayService, reducers } from './store';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    components.AddEditImageDialogComponent,
    components.AddEditMonthDialogComponent,
    components.AppNavBarComponent,
    components.GalleryComponent,
    components.IgnoreHiddenImagePipe,
    components.ImageOverlayComponent,
    components.DayOfMonthPipe,
    components.ReversePipe,
    containers.AboutComponent,
    containers.ManageGalleryComponent,
    containers.Photo365Component,
  ],
  entryComponents: [
    components.AddEditImageDialogComponent,
    components.AddEditMonthDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgxDatatableModule,
    RouterModule.forRoot(routing),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      GalleryEffects,
      ManageEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [
    AngularFireService,
    GalleryService,
    OverlayService,
  ],
})
export class AppModule { }