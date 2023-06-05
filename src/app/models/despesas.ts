import {TipoDespesa} from "./enums/tipo-despesa";

export class Despesas {

  id: number;
  tipo: TipoDespesa;
  valor: number;
  descricao: string = '';
  data: Date;

}
