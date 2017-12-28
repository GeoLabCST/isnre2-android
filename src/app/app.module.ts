import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { FileTransfer } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
 
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { OtherPage } from '../pages/other/other';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { LocationPage } from '../pages/location/location'

import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    AboutPage,
    ContactPage,
<<<<<<< HEAD
=======
    LoginPage,
    RegisterPage,
    WelcomePage,
    AmphoePage,
    TambonPage,
    LayersPage,
>>>>>>> origin/master
    LocationPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    AboutPage,
    ContactPage,
<<<<<<< HEAD
=======
    LoginPage,
    RegisterPage,
    WelcomePage,
    AmphoePage,
    TambonPage,
    LayersPage,
>>>>>>> origin/master
    LocationPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FileTransfer,
    Camera
  ]
})
export class AppModule {}
