import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShInputDirective } from './input.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShInputDirective],
  exports: [ShInputDirective]
})
export class InputModule { }
