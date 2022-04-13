import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCardModule } from '../../components/create-card/create-card.module';
import { CreateCardPageComponent } from './create-card-page.component';

@NgModule({
  declarations: [CreateCardPageComponent],
  imports: [CommonModule, CreateCardModule],
  exports: [CreateCardModule, CreateCardPageComponent],
})
export class CreateCardPageModule {}
