import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatCardModule,
]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules, ],
  exports: [...materialModules],
})
export class SharedModule {}
