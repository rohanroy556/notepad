import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientDashboardModule } from '@notepad-client/dashboard';
import { ClientMaterialModule } from '@notepad-client/material';
import { ClientSharedModule } from '@notepad-client/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component';

@NgModule({
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, ClientDashboardModule, ClientMaterialModule, ClientSharedModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
