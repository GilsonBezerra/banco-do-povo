import { RegisterService } from './../../services/register.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public registerForm: FormGroup;

  constructor(
    public formBuild : FormBuilder,
    private register: RegisterService,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.registerForm = this.formBuild.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  public cadastrar(){ 
    this.register.save(this.registerForm.value);
    console.log(this.registerForm.value);
    this.navCtrl.push('/login');
    this.registerForm.reset();
  }

}
