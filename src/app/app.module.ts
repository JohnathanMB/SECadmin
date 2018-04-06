import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from '../pages/login/login.module';
import {AddInventarioPageModule} from '../pages/add-inventario/add-inventario.module';
import { OlvidarContraseña2PageModule } from '../pages/olvidar-contraseña2/olvidar-contraseña2.module';
import { CambiarContraseña2PageModule} from '../pages/cambiar-contraseña2/cambiar-contraseña2.module';
import {AddUserPageModule} from '../pages/add-user/add-user.module';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    AddInventarioPageModule,
    OlvidarContraseña2PageModule,
    CambiarContraseña2PageModule,
    AddUserPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    RestProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
