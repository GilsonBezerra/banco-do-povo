import { RegisterService } from './../../services/register.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public registerForm: FormGroup;

  constructor(
    public formBuild: FormBuilder,
    private register: RegisterService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.createForm(new User());
  }

  public createForm(user: User) {
    this.registerForm = this.formBuild.group({
      id: [null],
      email: [user.email, Validators.required],
      senha: [user.senha, Validators.required]
    });
  }

  public cadastrar() {
    let data = this.registerForm.value;
    this.register.save(data);
    // console.log(data);
    this.registerForm.reset();
    this.navCtrl.navigateBack('/login');
  }

 

}
