import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { ShLayoutComponent } from './layout.component';
import { ShHeaderComponent } from './header.component';
import {ShSiderComponent} from './sider.component';
import { ShContentComponent } from './content.component';
import { ShFooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [ShLayoutComponent, ShHeaderComponent, ShSiderComponent, ShContentComponent, ShFooterComponent],
  declarations: [ShLayoutComponent, ShHeaderComponent, ShSiderComponent, ShContentComponent, ShFooterComponent]
})
export class ShLayoutModule { }
