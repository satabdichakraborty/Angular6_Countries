import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
