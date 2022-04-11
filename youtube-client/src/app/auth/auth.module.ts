import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, AuthRoutingModule],
  exports: [PagesModule],
  providers: [AuthService],
})
export class AuthModule {}
