import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BreakDownPage} from '../pages/breakdown/breakdown';
import {ScanPage} from '../pages/scan/scan';
import {ScanResultPage} from '../pages/scan-result/scan-result';

import {SocketService} from '../providers/socket-service/socket-service'; 
import {DataService} from '../providers/data-service/data-service'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BreakDownPage,
    ScanPage,
    ScanResultPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BreakDownPage,
    ScanPage,
    ScanResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    SocketService,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
