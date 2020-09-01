import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { ShAutocompleteTriggerDirective } from './autocomplete-trigger';
import { FormsModule } from '@angular/forms';
import { InputModule } from '../input/public-api';
import { ShAutocompleteOptionComponent } from './autocomplete-option.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule
  ],
  declarations: [AutocompleteComponent, ShAutocompleteTriggerDirective, ShAutocompleteOptionComponent],
  exports: [AutocompleteComponent, ShAutocompleteTriggerDirective]
})
export class AutocompleteModule { }
