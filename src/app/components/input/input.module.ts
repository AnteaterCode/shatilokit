import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShInputDirective } from './input.directive';
import { ShInputFieldComponent } from './input-field.components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShInputDirective, ShInputFieldComponent],
  exports: [ShInputDirective, ShInputFieldComponent]
})
export class InputModule { }
