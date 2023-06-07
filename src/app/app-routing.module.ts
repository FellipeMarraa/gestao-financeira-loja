import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BalancoComponent} from "./components/balanco/balanco.component";
import {ReceitasComponent} from "./components/receitas/receitas.component";
import {DespesasComponent} from "./components/despesas/despesas.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EstoqueComponent} from "./components/estoque/estoque.component";
import {ListDespesaComponent} from "./components/despesas/list-despesa/list-despesa.component";
import {AddDespesaComponent} from "./components/despesas/add-despesa/add-despesa.component";
import {EditDespesaComponent} from "./components/despesas/edit-despesa/edit-despesa.component";

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'despesas', component: DespesasComponent },
  { path: 'receitas', component: ReceitasComponent},
  { path: 'balanco', component: BalancoComponent},
  { path: 'estoque', component: EstoqueComponent},
  { path: 'ViewEmployee/:employeeId', component: ListDespesaComponent },
  { path: 'AddEmployee', component: AddDespesaComponent },
  { path: 'EditEmployee/:employeeId', component: EditDespesaComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
