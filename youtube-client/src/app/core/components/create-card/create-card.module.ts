import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCardComponent } from './create-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { cardReucer } from '../../../redux/reducers/reducer';

@NgModule({
  declarations: [CreateCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('appState', cardReucer),
  ],
  exports: [CreateCardComponent],
})
export class CreateCardModule {}
