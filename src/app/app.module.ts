import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalancoComponent } from './components/balanco/balanco.component';
import { DespesasComponent } from './components/despesas/despesas.component';
import { ReceitasComponent } from './components/receitas/receitas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EstoqueComponent } from './components/estoque/estoque.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TabelaComponent} from "./components/tabela/tabela.component";
import { FiltroPipe } from './components/tabela/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BalancoComponent,
    DespesasComponent,
    ReceitasComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    EstoqueComponent,
    TabelaComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
