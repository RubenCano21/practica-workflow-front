import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tramite} from "./tramite";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  private apiUrl = 'http://localhost:8080/api/tramites';

  constructor(private http: HttpClient) { }

  listarTramites(): Observable<Tramite[]>{
    return this.http.get<Tramite[]>(`${this.apiUrl}/listar`);
  }

  registrarTramite(tramite: Tramite): Observable<Tramite>{
    return this.http.post<Tramite>(`${this.apiUrl}/registrar`, tramite);
  }

  obtenerUltimoCodigo(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/ultimo-codigo`);
  }

}
