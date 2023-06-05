import {Component, OnInit} from '@angular/core';
import {Despesas} from "../../models/despesas";
import {FormControl, FormGroup} from "@angular/forms";
import {TipoDespesa} from "../../models/enums/tipo-despesa";

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {

  formDespesa: any = FormGroup;

  createForm(despesa: Despesas) {
    this.formDespesa = new FormGroup({
      nome: new FormControl(despesa.id),
      tipo: new FormControl(despesa.tipo),
      valor: new FormControl(despesa.valor),
      data: new FormControl(despesa.data),
      descricao: new FormControl(despesa.descricao)
    })
  }

  keys = Object.keys;
  tipoDespesa = TipoDespesa;

  ngOnInit(): void {
    this.createForm(new Despesas());
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formDespesa.value);
  }


}
