import { FormGroup } from '@angular/forms';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public body: User;

  constructor() { }

  public save(form: FormGroup) {
    return localStorage.setItem('user', JSON.stringify(form));
  }

}

