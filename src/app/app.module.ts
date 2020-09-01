import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtondemoModule } from './showcase/components/buttondemo/buttondemo.module';
import { InputdemoModule } from './showcase/components/inputdemo/inputdemo.module';
import { AutocompletedemoModule } from './showcase/components/autocompletedemo/autocompletedemo.module';
import { AutocompleteModule } from './components/autocomplete/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtondemoModule,
    InputdemoModule,
    AutocompletedemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
