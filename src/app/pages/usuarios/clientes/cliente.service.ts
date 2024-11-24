import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "./cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiUrl}/listar`);
  }


}
