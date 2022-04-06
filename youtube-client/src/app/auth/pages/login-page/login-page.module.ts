import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginModule } from '../../components/login/login.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginModule],
  exports: [LoginPageComponent, LoginModule],
})
export class LoginPageModule {}
