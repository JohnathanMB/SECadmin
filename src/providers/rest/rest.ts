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
  apiUrlLogin = 'http://api-rest-sec.herokuapp.com/e/login';
  //apiUrlRegistrar = 'http://api-rest-sec.herokuapp.com/u/signup';
  apiUrlRegistrarAdmin = 'http://api-rest-sec.herokuapp.com/e/administrador';
  apiUrlRegistrarRepartidor ='http://api-rest-sec.herokuapp.com/e/repartidor';
  apiUrLoginEmpleado= 'http://api-rest-sec.herokuapp.com/e/login';
  apiUrlGetMedicamentos = 'http://api-rest-sec.herokuapp.com/m/medicamentos';
  apiUrlGetMedicamentoCategoria = 'http://api-rest-sec.herokuapp.com/m/medicamentos/:categoria';
  apiUrlPostMedicamento= 'http://api-rest-sec.herokuapp.com/m/medicamentos';
  apiUrlModificarMedicamento = 'http://api-rest-sec.herokuapp.com/m/put/medicamentos/:id';
  apiUrlEliminarMedicamento = 'http://api-rest-sec.herokuapp.com/m/del/medicamentos/:id';


  addMedicamento(data){
    //console.log(data);
    

    console.log(JSON.stringify(data));
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlPostMedicamento, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlLogin, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addAdmin(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlRegistrarAdmin, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addRepartidor(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlRegistrarRepartidor, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
