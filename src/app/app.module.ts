import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BalancoComponent} from './components/balanco/balanco.component';
import {DespesasComponent} from './components/despesas/despesas.component';
import {ReceitasComponent} from './components/receitas/receitas.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EstoqueComponent} from './components/estoque/estoque.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TabelaComponent} from "./components/tabela/tabela.component";
import {FiltroPipe} from './components/tabela/filtro.pipe';
import {ToastrModule} from "ngx-toastr";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {CadastraDespesaComponent} from "./components/pop-up/cadastra-despesa/cadastra-despesa.component";
import {MatDialogModule} from "@angular/material/dialog";

export const MY_DATA_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM/YYYY ',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM/YYYY',
  },
};
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
    FiltroPipe,
    CadastraDespesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    ToastrModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    CommonModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
