import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';


@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  showSubmenu = false;
  iconName = "ios-add-circle-outline"

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
  }
  close() {
    this.viewCtrl.dismiss();
  }
  menuItemHandler(d): void {
    this.showSubmenu = !this.showSubmenu;
    if(this.showSubmenu) {
      this.iconName = "ios-remove-circle-outline";
    }else {
      this.iconName = "ios-add-circle-outline";
    }
  }
  goTestPage() {
    this.navCtrl.push('TestPage');
  }
}
