import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatToolbarModule,
    ],
})
export class SharedModule { }