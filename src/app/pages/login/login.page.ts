import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public imgLogo = '../../../assets/img/logo.webp';
  pesquisa = [];


  constructor(private register: RegisterService) { }

  ngOnInit() {
    this.consultar()
    console.log('Resultado da pesquisa ', this.pesquisa);
  }
  consultar() {
    this.register.getAll()
      .subscribe((res) => {
        this.pesquisa = res
      })
  }

}
