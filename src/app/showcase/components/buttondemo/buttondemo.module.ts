import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtondemoComponent } from './buttondemo.component';
import { ShButtonModule } from '../../../components/button/public-api';

@NgModule({
  imports: [
    CommonModule,
    ShButtonModule
  ],
  declarations: [ButtondemoComponent],
  exports: [ButtondemoComponent]
})
export class ButtondemoModule { }
