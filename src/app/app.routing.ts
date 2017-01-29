import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ManageGalleryComponent } from './manage-gallery';
import { Photo365Component } from './photo-365/photo-365.component';

export const routing: Routes = [
    { path: '', redirectTo: '/photo365', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'manage', component: ManageGalleryComponent },
    { path: 'photo365', component: Photo365Component },
];