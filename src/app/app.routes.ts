import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { DoacaoRoupasComponent } from './doacao-roupas/doacao-roupas.component';
import { DoacaoAlimentosComponent } from './doacao-alimentos/doacao-alimentos.component';
import { BaixeAquiComponent } from './baixe-aqui/baixe-aqui.component';
import { SuporteComponent } from './suporte/suporte.component';
import { TermosComponent } from './termos/termos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: SobreComponent },
  { path: 'doacao-roupas', component: DoacaoRoupasComponent },
  { path: 'doacao-alimentos', component: DoacaoAlimentosComponent },
  { path: 'baixe-aqui', component: BaixeAquiComponent },
  { path: 'login', component: BaixeAquiComponent },
  { path: 'suporte', component: SuporteComponent },
  { path: 'termos', component: TermosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
