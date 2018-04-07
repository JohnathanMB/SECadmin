import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
              public restProvider: RestProvider,
              public alertCtrl: AlertController
            ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddInventarioPage');
  }
  
  addMedicamento(){
    this.medicamento = this.completeDefault();
    if(!this.validateComplete(this.medicamento)){
      var alert = this.alertCtrl.create({
        title: 'Campos Vacios',
        subTitle: 'Por Favor LLenar Los Campos Faltantes',
        buttons: ['0k']
      });
      alert.present();
      return;
    }
    this.restProvider.addMedicamento(this.medicamento).then((result) => {
      
      this.todoOk();
      console.log(result);
      
    }, (err) => { 
      this.todoNoOk(err);
      //this.next(err);
      console.log(err);
    })
  }

  todoOk(){
    this.medicamento = {
      id_codigo_inventario: '',
      nombre: '',
      unidades_disponibles: '',
      fecha_de_vencimiento: '',
      laboratorio: '',
      precio_unidad: '',
      categoria: ''
    }
    var alert = this.alertCtrl.create({
      title: 'Todo OK',
      subTitle: 'Se Ha Registrado El Producto',
      buttons: ['0k']
    });
    alert.present();
  }

  todoNoOk(result){
    if(result.status = '200'){
      return;
    }
    var alert = this.alertCtrl.create({
      title: 'Error: '+ result.status,
      subTitle: 'Se Ha Producido Un Error\n Por favor Intentelo De Nuevo',
      buttons: ['0k']
    });
    alert.present();
  }

  next(result: any):void{
    switch(result.status){
        case 300: {
          var alert = this.alertCtrl.create({
              title: 'Error: ' + result.status,
              subTitle: 'Falta Información',
              buttons: ['0k']
          });
          alert.present();
          break;
        }
        default:{
          this.todoNoOk(result);
          break;
        }
    }
  }

  completeDefault(): any{
    var medicamentoSend = this.medicamento;
    if(this.medicamento.fecha_de_vencimiento==''){
      medicamentoSend.fecha_de_vencimiento='0001-01-01';
    }
    if(this.medicamento.laboratorio==''){
      medicamentoSend.laboratorio='Default';
    }
    if(this.medicamento.precio_unidad==''){
      medicamentoSend.precio_unidad='0';
    }
    if(this.medicamento.unidades_disponibles==''){
      medicamentoSend.unidades_disponibles='0';
    }
    return medicamentoSend;
  }

  validateComplete(object: any):boolean{
    var validate:boolean = true;
    if((object.id_codigo_inventario=='') || (object.nombre=='' ) || (object.categoria=='' )){
      
      validate = false;
    }
    return validate;
  }

}
