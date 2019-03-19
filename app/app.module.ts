import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadisciplinaComponent } from './listadisciplina/listadisciplina.component';
import { ListainteresseComponent } from './listainteresse/listainteresse.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadisciplinaComponent,
    ListainteresseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
