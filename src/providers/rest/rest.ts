import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  apiUrl = 'http://api-rest-sec.herokuapp.com';
  apiUrlLogin = 'http://api-rest-sec.herokuapp.com/u/login';
  apiUrlRegistrar = 'http://api-rest-sec.herokuapp.com/u/signup';
  apiUrlRegistrarAdmin = 'http://api-rest-sec.herokuapp.com/e/administrador';
  apiUrlRegistrarRepartidor ='http://api-rest-sec.herokuapp.com/e/repartidor';
  apiUrLoginEmpleado= 'http://api-rest-sec.herokuapp.com/e/repartidor';
  apiUrlGetMedicamentos = 'http://api-rest-sec.herokuapp.com/e/repartidor';
  apiUrlGetMedicamentoCategoria = 'http://api-rest-sec.herokuapp.com/e/repartidor';
  apiUrlPostMedicamento= 'http://api-rest-sec.herokuapp.com/m/medicamentos/';
  apiUrlModificarMedicamento = 'http://api-rest-sec.herokuapp.com/m/medicamentos/:id';
  apiUrlEliminarMedicamento = 'http://api-rest-sec.herokuapp.com/m/medicamentos/:id';


  saveMedicamento(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlPostMedicamento, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
