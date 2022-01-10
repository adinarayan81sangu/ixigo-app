import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NvabarComponent } from './Components/nvabar/nvabar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './AngularMaterialModules/ang-material/ang-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NvabarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
