import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    
    @ViewChild('username') uname;
    @ViewChild('password') upass;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    
    login():boolean{
        //logica
        return true;
    }
    
    
    goMain():void{
        var unameShow = this.uname.value;
        var upassShow = this.upass.value;
        var log = false;
        if(this.login()){
            //this.navCtrl.push(MainPage);
            this.navCtrl.setRoot(HomePage);
        }else{
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'El usuario '+ unameShow +'o su contraseña no existen',
                buttons: ['0k']
            });
            alert.present();
        }
        
    }

}
