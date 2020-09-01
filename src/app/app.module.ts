import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtondemoModule } from './showcase/components/buttondemo/buttondemo.module';
import { InputdemoModule } from './showcase/components/inputdemo/inputdemo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtondemoModule,
    InputdemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
