import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = "http://localhost:8080/register"

  constructor(private http: HttpClient) {}

  createRegister(register: Register): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, register)
  }
}
