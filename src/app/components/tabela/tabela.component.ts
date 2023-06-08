import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Despesas} from "../../models/despesas";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import * as moment from "moment";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {CadastraDespesaComponent} from "../pop-up/cadastra-despesa/cadastra-despesa.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements AfterViewInit {

  constructor(private dialog: MatDialog) {
  }

  @ViewChild(MatTable) table: MatTable<Despesas>;

  date = (moment(moment.utc().format("DD/MM/YYYY"))).format('DD/MM/YYYY');
  despesas: Despesas[] = [
    {id: 1, tipo: 1, descricao: 'Compra de produtos para reposição', valor: 298.50, data: this.date, editMode: false},
    {id: 2, tipo: 2, descricao: 'Pagamento de água', valor: 400.50, data: this.date, editMode: false},
    {id: 3, tipo: 3, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 4, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 5, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 6, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 7, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 8, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 9, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 10, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},
    {id: 11, tipo: 1, descricao: 'Pagamento de Energia', valor: 500.50, data: this.date, editMode: false},

  ];

  dataSource = new MatTableDataSource<Despesas>(this.despesas);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  tiposDespesas: TipoDespesa[] = [
    {id: 1, descricao: "Energia"},
    {id: 2, descricao: "Água"},
    {id: 3, descricao: "Aluguel"},
    {id: 4, descricao: "Reposição"},
  ];

  colunas: string[] = ['tipo', 'descricao', 'valor', 'data', 'acoes'];

  despesa: FormGroup = new FormGroup({
    id: new FormControl(null),
    tipo: new FormControl(null),
    descricao: new FormControl(''),
    valor: new FormControl(0.00),
    data: new FormControl(new Date()),
    editMode: new FormControl(false)
  });

  openPopup(form: FormGroup): void {

    let dateFormatt = moment(form.value.data).utc().format("YYYY-MM-DD")
    form.value.data = new Date(dateFormatt);

    const dialogRef = this.dialog.open(CadastraDespesaComponent, {
      width: '500px',
      data: {despesa: form, tiposDespesa: this.tiposDespesas}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.operacao == 'salvar') {
        if (result.data.despesa.value.editMode) {
          result.data.despesa.value.editMode = false;
          this.despesas.forEach(item => {
            if (item.id == result.data.despesa.value.id) {
              let index = this.despesas.indexOf(item);
              this.despesas[index] = result.data.despesa.value;
            }
          })
        } else {
          this.despesas.push(result.data.despesa.value);
        }
      }else{

        this.despesas.forEach(item => {
          if (item.id == result.data.despesa.value.id) {
            let index = this.despesas.indexOf(item);
            this.despesas[index].editMode = false;
          }
        })
      }
      this.despesa = new FormGroup({
        id: new FormControl(null),
        tipo: new FormControl(null),
        descricao: new FormControl(''),
        valor: new FormControl(0.00),
        data: new FormControl(new Date()),
        editMode: new FormControl(false)
      });
    });

  }

  editarCampo(despesa: Despesas) {
    despesa.editMode = true;
    this.despesa.setValue(despesa);
    console.log(this.despesa);

    this.openPopup(this.despesa);
  }

  excluirCampo(despesa: Despesas) {
    const index = this.despesas.indexOf(despesa);
    if (index !== -1) {
      this.despesas.splice(index, 1);
    }

    this.table.renderRows();

  }
}

export interface TipoDespesa {

  id: number;
  descricao: string;

}
