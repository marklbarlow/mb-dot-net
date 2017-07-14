import { Routes } from '@angular/router';

import * as containers from './containers';

export const routing: Routes = [
    { path: '', redirectTo: '/photo365', pathMatch: 'full' },
    { path: 'about', component: containers.AboutComponent },
    { path: 'manage', component: containers.ManageGalleryComponent },
    { path: 'photo365', component: containers.Photo365Component },
];