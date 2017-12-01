import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { TestPage } from "../test/test";


@Component({
  selector: 'page-coletas',
  templateUrl: 'coletas.html'
})
export class ColetasPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
  goTestPage() {
    this.navCtrl.push(TestPage);
  }
}
