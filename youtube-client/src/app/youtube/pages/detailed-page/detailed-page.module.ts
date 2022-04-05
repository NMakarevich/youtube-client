import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedPageComponent } from './detailed-page.component';



@NgModule({
  declarations: [DetailedPageComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailedPageComponent]
})
export class DetailedPageModule { }
