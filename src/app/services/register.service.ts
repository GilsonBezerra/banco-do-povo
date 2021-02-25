import { environment } from './../../environments/environment';
import { FormGroup } from '@angular/forms';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public baseURL = environment.endPoint;
  
  constructor(
    private http : HttpClient
  ) { }

  public save(data: any) {
    // return localStorage.setItem('user', JSON.stringify(user));
    return this.http.post(`${this.baseURL}/user`, JSON.stringify(data));
    // console.log(`Testando o serviço ${this.user}`);
    
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/user`);
  }

}

