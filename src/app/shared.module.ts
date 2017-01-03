import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
})
export class SharedModule {
}