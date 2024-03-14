import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepConsultService {
  url_API = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getCep(cep: string) {
    return this.http.get(`${this.url_API}${cep}/json/`);
  }
}
