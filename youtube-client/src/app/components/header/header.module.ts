import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
