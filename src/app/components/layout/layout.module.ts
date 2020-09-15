import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { ShLayoutComponent } from './layout.component';
import { ShHeaderComponent } from './header.component';
import {ShSiderComponent} from './sider.component';
import { ShContentComponent } from './content.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [ShLayoutComponent, ShHeaderComponent, ShSiderComponent, ShContentComponent],
  declarations: [ShLayoutComponent, ShHeaderComponent, ShSiderComponent, ShContentComponent]
})
export class ShLayoutModule { }
