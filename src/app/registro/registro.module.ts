import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    RegistroComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class RegistroModule { }
