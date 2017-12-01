import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  items = [
    "Alterrar Senha",
    "Contato",
    "Sobre",
    "Sair"
  ];

  constructor(public navCtrl: NavController) {
  }

}
