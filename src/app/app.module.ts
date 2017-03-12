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
import { ManageEffects } from './effects/manage.effects';

import { reducer, GalleryService, OverlayService } from './store';
import { AngularFireService } from './angularfire.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    components.AddImageDialogComponent,
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
    components.AddImageDialogComponent,
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
    EffectsModule.run(ManageEffects),
  ],
  providers: [
    AngularFireService,
    GalleryService,
    OverlayService,
  ],
})
export class AppModule { }