import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(linhas: any[], valorFiltro: number, mesFiltro: string, textoFiltro: string): any[] {
    if (!linhas) {
      return [];
    }

    return linhas.filter(linha => {
      const valorPassaFiltro = !valorFiltro || linha.valor === valorFiltro;
      const mesPassaFiltro = !mesFiltro || linha.mes.toLowerCase().includes(mesFiltro.toLowerCase());
      const textoPassaFiltro = !textoFiltro || linha.texto.toLowerCase().includes(textoFiltro.toLowerCase());

      return valorPassaFiltro && mesPassaFiltro && textoPassaFiltro;
    });
  }
}
