import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  linhas: any[] = []; // Array para armazenar as linhas da tabela
  filtroValor: number;
  filtroMes: string;
  filtroTexto: string;
  popupVisivel: boolean = false;
  novaLinha: any = {}; // Objeto para armazenar os dados da nova linha

  abrirPopup() {
    this.novaLinha = {}; // Limpa os campos do formulário do popup
    this.popupVisivel = true;
  }

  fecharPopup() {
    this.popupVisivel = false;
  }

  salvarLinha() {
    this.linhas.push(this.novaLinha); // Adiciona a nova linha ao array
    this.popupVisivel = false;
  }

  editarLinha(linha: any) {
    // Implemente a lógica para editar uma linha existente
  }

  removerLinha(linha: any) {
    const index = this.linhas.indexOf(linha);
    if (index !== -1) {
      this.linhas.splice(index, 1);
    }
  }
}
