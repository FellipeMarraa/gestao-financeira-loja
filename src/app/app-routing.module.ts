import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BalancoComponent} from "./components/balanco/balanco.component";
import {ReceitasComponent} from "./components/receitas/receitas.component";
import {DespesasComponent} from "./components/despesas/despesas.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EstoqueComponent} from "./components/estoque/estoque.component";

const routes: Routes = [

  { path: 'balanco', component: BalancoComponent},
  { path: 'receitas', component: ReceitasComponent},
  { path: 'despesas', component: DespesasComponent },
  { path: 'estoque', component: EstoqueComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', component: DashboardComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
