import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
   url:string = "http://localhost:8080/alianza";

  constructor(private http:HttpClient) { }

  obtenerClientes(parametroBusqueda:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/api/client/consultar${parametroBusqueda}`);
  }

  guardarCliente(cliente:any): Observable<any[]>{
    return this.http.post<any[]>(`${this.url}/api/client/guardar`,cliente);
  }
}
