import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AddRepartidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-repartidor',
  templateUrl: 'add-repartidor.html',
})
export class AddRepartidorPage {

  private repartidor = {
    id_repartidor: '',
    id_tipo_documento: '',
    correo: '',
    nombre: '',
    fecha_de_nacimiento: '',
    horarios: ''
  }


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restProvider: RestProvider
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRepartidorPage');
  }

  addRepartidor(){
    this.restProvider.addRepartidor(this.repartidor).then((result) => {
      console.log(result);
    }, (err) => { 
      console.log(err);
    })
  }

}
