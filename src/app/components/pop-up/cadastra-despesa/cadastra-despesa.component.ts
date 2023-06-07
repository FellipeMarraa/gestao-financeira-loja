import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cadastra-despesa',
  templateUrl: './cadastra-despesa.component.html',
  styleUrls: ['./cadastra-despesa.component.scss']
})
export class CadastraDespesaComponent {

  constructor(
    public dialogRef: MatDialogRef<CadastraDespesaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  fecharPopup(): void {
    this.dialogRef.close({data: this.data, operacao: 'fechar'});
  }

  salvarDespesa() {
    this.dialogRef.close({data: this.data, operacao: 'salvar'});
  }
}
