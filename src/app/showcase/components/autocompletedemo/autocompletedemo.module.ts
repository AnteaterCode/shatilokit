import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompletedemoComponent } from './autocompletedemo.component';
import { AutocompleteModule } from '../../../components/autocomplete/public-api';
import { InputModule } from '../../../components/input/public-api';

@NgModule({
  imports: [
    CommonModule,
    AutocompleteModule,
    InputModule
  ],
  declarations: [AutocompletedemoComponent],
  exports: [AutocompletedemoComponent]
})
export class AutocompletedemoModule { }
