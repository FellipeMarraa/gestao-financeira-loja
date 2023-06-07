import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Despesas} from "../../models/despesas";
import {TipoDespesa} from "../../models/enums/tipo-despesa";
import {MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";
import * as moment from "moment";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {CadastraDespesaComponent} from "../pop-up/cadastra-despesa/cadastra-despesa.component";

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements AfterViewInit {

  constructor(private dialog: MatDialog) {}

  @ViewChild(MatTable) table: MatTable<Despesas>;



  data = (moment(moment.utc().format("DD/MM/YYYY"))).format('DD/MM/YYYY');
  despesas: Despesas[] = [
    {id: 1, tipo: TipoDespesa.REPOSICAO, descricao: 'Compra de produtos para reposição', valor: 298.50, data: this.data, editMode: false},
    {id: 2, tipo: TipoDespesa.AGUA, descricao: 'Pagamento de água', valor: 400.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},
    {id: 3, tipo: TipoDespesa.ENERGIA, descricao: 'Pagamento de Energia', valor: 500.50, data: this.data, editMode: false},

  ];

  dataSource = new MatTableDataSource<Despesas>(this.despesas);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  tiposDespesas = [TipoDespesa.ALUGUEL, TipoDespesa.ENERGIA, TipoDespesa.AGUA, TipoDespesa.REPOSICAO]


  getTipoDespesaLabel(option: TipoDespesa) {
    switch (option) {
      case 0:
        return "Selecione";
      case 1:
        return "Aluguel";
      case 2:
        return "Energia";
      case 3:
        return "Água";
      case 4:
        return "Reposição";
      default:
        throw new Error("Unsupported option");
    }
  }

  colunas: string[] = ['tipo', 'descricao', 'valor', 'data', 'acoes'];

  exibirAdicionarCampo() {
    // this.editMode = true;
    this.despesas.push({id: 0, tipo: TipoDespesa.AGUA, descricao: '', valor: 0.00, data: this.data, editMode: true});
    this.table.renderRows();
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(CadastraDespesaComponent, {
      width: '250px',
      data: { /* Dados opcionais para passar para o popup */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O popup foi fechado');
    });
  }



  editarCampo(despesa: Despesas) {
    despesa.editMode = true;
    this.table.renderRows();
  }

  salvarCampo(despesa: Despesas) {
    despesa.editMode = false;
    this.table.renderRows();
  }

  excluirCampo(despesa: Despesas) {
    const index = this.despesas.indexOf(despesa);
    if (index !== -1) {
      this.despesas.splice(index, 1);
    }

    this.table.renderRows();

  }

}
