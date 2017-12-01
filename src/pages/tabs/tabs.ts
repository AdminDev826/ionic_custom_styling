import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { ColetasPage } from '../coletas/coletas';
import { NotasPage } from "../notas/notas";
import { ManifestoPage } from "../manifesto/manifesto";
import { PerfilPage } from "../perfil/perfil";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotasPage;
  tab2Root = ManifestoPage;
  tab3Root = ColetasPage;
  tab4Root = PerfilPage;

  constructor(
    public popoverCtrl: PopoverController
  ) {

  }

  showNotasPop(myEvent) {
    let popover = this.popoverCtrl.create(NotasPage,{},{cssClass: "notasPop"});
    popover.present({ev: myEvent});
  }
  showColetasPop(myEvent) {
    let popover = this.popoverCtrl.create(ColetasPage,{},{cssClass: "coletasPop"});
    popover.present({ev: myEvent});
  }
}
