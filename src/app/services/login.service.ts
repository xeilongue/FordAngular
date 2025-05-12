import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient)

  login(usuario: string, senha: string) {

    return this.http.post<Usuario> ("http://localhost:3001/login", {usuario, senha});
    
  }

}
