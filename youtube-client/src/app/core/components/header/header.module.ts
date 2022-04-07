import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
