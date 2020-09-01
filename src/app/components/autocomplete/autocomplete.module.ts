import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { ShAutocompleteTriggerDirective } from './autocomplete-trigger';
import { FormsModule } from '@angular/forms';
import { InputModule } from '../input/public-api';
import { ShAutocompleteOptionComponent } from './autocomplete-option.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    InputModule
  ],
  declarations: [AutocompleteComponent, ShAutocompleteTriggerDirective, ShAutocompleteOptionComponent],
  exports: [AutocompleteComponent, ShAutocompleteTriggerDirective]
})
export class AutocompleteModule { }
