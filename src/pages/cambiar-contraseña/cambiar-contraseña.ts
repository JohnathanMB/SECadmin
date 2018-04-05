import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CambiarContraseñaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-contraseña',
  templateUrl: 'cambiar-contraseña.html',
})
export class CambiarContraseñaPage {

  @ViewChild('passActual') passActual;
  @ViewChild('pass1') pass1;
  @ViewChild('pass2') pass2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarContraseñaPage');
  }

  



}
