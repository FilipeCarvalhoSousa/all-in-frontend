import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private apiUrl = 'http://192.168.31.209:3000'; // URL da API NestJS

  constructor(private httpClient: HttpClient) { }

  getAllMembros(): Observable<any[]> {
    const url = `${this.apiUrl}/pessoa`
    return this.httpClient.get<any[]>(url);
  }
}
