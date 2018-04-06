import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CambiarContraseña2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-contrasena2',
  templateUrl: 'cambiar-contraseña2.html',
})
export class CambiarContraseña2Page {
  @ViewChild('actualPass') actualPass;
  @ViewChild('pass1') pass1;
  @ViewChild('pass2') pass2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarContraseña2Page');
  }

  equalsPass(passA: string, passB: string):boolean {
    if(passA == passB && (passA != '' || passB != '')){
      return true;
    }else{
      return false;
    }
  }

  changePass(){
    if(this.equalsPass(this.pass1.value, this.pass2.value)){
          var alertA = this.alertCtrl.create({
            title: 'Todo ok',
            subTitle: 'Las contraseñas coinciden '+ this.actualPass.value,
            buttons: ['0k']
        });
        alertA.present();
        this.navCtrl.setRoot(LoginPage);
    }else{
        var alertB = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'las contraseñas no coinciden '+ this.actualPass.value,
          buttons: ['0k']
      });
      alertB.present();
    }
  }

}
