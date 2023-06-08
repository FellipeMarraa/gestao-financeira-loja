import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Despesas} from "../models/despesas";

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private apiUrl = 'http://localhost:8080/despesa';

  constructor(private http: HttpClient) { }

  findDespesas(): Observable<Despesas[]> {
    return this.http.get<Despesas[]>(this.apiUrl + "/list");
  }

  createDespesa(despesa: Despesas): Observable<Despesas> {
    return this.http.post<Despesas>(this.apiUrl + "/create", despesa);
  }
}
