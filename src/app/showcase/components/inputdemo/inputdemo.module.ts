import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputdemoComponent } from './inputdemo.component';
import { InputModule } from '../../../components/input/public-api';

@NgModule({
  imports: [
    CommonModule,
    InputModule
  ],
  declarations: [InputdemoComponent],
  exports: [InputdemoComponent]
})
export class InputdemoModule { }
