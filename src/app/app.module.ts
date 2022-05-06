import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'grapesjs-preset-webpage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
