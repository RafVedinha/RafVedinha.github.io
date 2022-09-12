import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { VidaProfissionalComponent } from './pages/vida-profissional/vida-profissional.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreMimComponent,
    VidaProfissionalComponent,
    PortifolioComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
