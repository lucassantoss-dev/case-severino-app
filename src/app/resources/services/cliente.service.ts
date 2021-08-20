import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/components/cliente/Cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL: string = environment.apiURLBase + '/painel-cliente';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}`, cliente)
  }
  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente._id}`, cliente)
  }
  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }
  getClienteById(id: string) : Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<Cliente>(`${this.apiURL}/${cliente._id}`)
  }
}
