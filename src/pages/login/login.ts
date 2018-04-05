import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { OlvidarContraseñaPage } from '../olvidar-contraseña/olvidar-contraseña';
import { CambiarContraseñaPage } from '../cambiar-contraseña/cambiar-contraseña';

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
    //variable que será tomada para consultar 
    //si es la primera vez que el usuario entra a la aplicación
    firstTime: boolean = true;
    

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
        //var log = false;
        if(this.login()){
            if(this.firstTime){
                //si es la primera vez que el usuario entra
                //primero entra a cambiar la contraseña
                this.navCtrl.setRoot(CambiarContraseñaPage);
            }else{
                //si no es la primera vez, entra de una vez a 
                //la vista principal
                this.navCtrl.setRoot(HomePage);
            }
        
        }else{
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'El usuario '+ unameShow +'o su contraseña no existen',
                buttons: ['0k']
            });
            alert.present();
        }
        
    }

    goOlvideContrasena():void{
        this.navCtrl.setRoot(OlvidarContraseñaPage);
    }

}
