import {NgModule} from '@angular/core';
import {ShButton} from './button.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ShButton
  ],
  declarations: [
    ShButton
  ],
})
export class ShButtonModule {}