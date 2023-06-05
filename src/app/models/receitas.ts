import {TipoReceita} from "./enums/tipo-receita";


export class Receitas {

  id: number;
  tipo: TipoReceita;
  descricao: string = '';
  valor: number;


  constructor(id: number, tipo: TipoReceita, descricao: string, valor: number) {
    this.id = id;
    this.tipo = tipo;
    this.descricao = descricao;
    this.valor = valor;
  }
}
