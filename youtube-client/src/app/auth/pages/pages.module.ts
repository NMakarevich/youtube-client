import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login-page/login-page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginPageModule],
  exports: [LoginPageModule],
})
export class PagesModule {}
