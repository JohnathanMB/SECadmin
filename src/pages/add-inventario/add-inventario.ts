import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

/**
 * Generated class for the AddInventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-inventario',
  templateUrl: 'add-inventario.html',
})
export class AddInventarioPage {

  private medicamento = {
    id_codigo_inventario: '',
    nombre: '',
    unidades_disponibles: '',
    fecha_de_vencimiento: '',
    laboratorio: '',
    precio_unidad: '',
    categoria: ''

  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restProvider: RestProvider
            ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddInventarioPage');
  }
  
  saveMedicamento(){
    this.restProvider.saveMedicamento(this.medicamento).then((result) => {
      console.log(result);
    }, (err) => { 
      console.log(err);
    })
  }

}
