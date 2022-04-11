import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorizeDirective } from './colorize/colorize.directive';

@NgModule({
  declarations: [ColorizeDirective],
  imports: [CommonModule],
  exports: [ColorizeDirective],
})
export class DirectivesModule {}
