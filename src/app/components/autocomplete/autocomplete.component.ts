import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { ShAutocompleteOptionComponent } from './autocomplete-option.component';

@Component({
  selector: 'sh-autocomplete',
  exportAs: 'shAutocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AutocompleteComponent  {

  @Input() shDataSource?: any;

  isOpen = false;

  constructor() { }


}
