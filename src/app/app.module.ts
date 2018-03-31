import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { FileTransfer } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
 
import { Formula_1Page } from '../pages/formula-1/formula-1';
import { Formula_2Page } from '../pages/formula-2/formula-2';
import { Formula_3Page } from '../pages/formula-3/formula-3';
import { Formula_4Page } from '../pages/formula-4/formula-4';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { OtherPage } from '../pages/other/other';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LocationPage } from '../pages/location/location';
import { MapPage } from '../pages/map/map';
import { ChartPage } from '../pages/chart/chart';
import { DssPage } from '../pages/dss/dss';
import { HomePage } from '../pages/home/home'

import { ShareService } from '../providers/service/share';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OtherPage,
    AboutPage,
    ContactPage,
    RegisterPage,
    WelcomePage,
    LocationPage,
    MapPage,
    Formula_1Page,
    Formula_2Page,
    Formula_3Page,
    Formula_4Page,
    ChartPage,
    DssPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OtherPage,
    AboutPage,
    ContactPage,
    RegisterPage,
    WelcomePage,
    LocationPage,
    MapPage,
    Formula_1Page,
    Formula_2Page,
    Formula_3Page,
    Formula_4Page,
    ChartPage,
    DssPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShareService,
    FileTransfer,
    Camera,
    Geolocation
  ]
})
export class AppModule {}
