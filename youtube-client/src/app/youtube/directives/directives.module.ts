import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorizeBorderDirective } from './colorize-border/colorize-border.directive';



@NgModule({
  declarations: [ColorizeBorderDirective],
  imports: [
    CommonModule
  ],
  exports: [ColorizeBorderDirective]
})
export class DirectivesModule { }
