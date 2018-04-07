import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AddAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-admin',
  templateUrl: 'add-admin.html',
})
export class AddAdminPage {

  private admin = {
    id_administrador: '',
    tipo_documento: '',
    correo: '',
    nombre: '',
    fecha_de_nacimiento: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restProvider: RestProvider
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAdminPage');
  }

  addAdmin(){
    this.restProvider.addAdmin(this.admin).then((result) => {
      console.log(result);
    }, (err) => { 
      console.log(err);
    })
  }

}
