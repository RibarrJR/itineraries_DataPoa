import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusComponent } from './pages/bus/bus.component';
import { LotacaoComponent } from './pages/lotacao/lotacao.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onibus', component: BusComponent },
  { path: 'lotacao', component: LotacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
