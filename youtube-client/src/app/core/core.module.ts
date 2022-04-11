import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    PagesModule
  ],
  exports: [HeaderModule, PagesModule]
})
export class CoreModule { }
