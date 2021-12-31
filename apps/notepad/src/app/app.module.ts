import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@notepad/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@notepad/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component';

@NgModule({
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, HttpClientModule, MaterialModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
