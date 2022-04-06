import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule],
  exports: [PagesModule],
  providers: [AuthService],
})
export class AuthModule {}
