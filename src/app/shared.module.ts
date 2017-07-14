import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

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