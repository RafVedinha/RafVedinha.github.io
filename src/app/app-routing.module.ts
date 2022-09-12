import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { VidaProfissionalComponent } from './pages/vida-profissional/vida-profissional.component';
import { HomeComponent } from './pages/home/home.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

const routes: Routes = [
{ path: 'Contato', component: ContatoComponent},
{ path: 'SobreMim', component: SobreMimComponent },
{ path: 'VidaProfissional', component: VidaProfissionalComponent },
{ path: 'Home', component: HomeComponent },
{ path: 'Portifolio', component: PortifolioComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
