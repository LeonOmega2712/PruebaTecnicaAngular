import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroModule } from './registro/registro.module';
import { LoginModule } from './login/login.module';
import { TablaModule } from './tabla/tabla.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroModule,
    LoginModule,
    TablaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
