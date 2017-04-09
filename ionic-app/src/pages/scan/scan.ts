import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {DataService} from '../../providers/data-service/data-service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})

export class ScanPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private id: string;
  error : string;

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private scanner : BarcodeScanner,
    private dataService : DataService,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.id = this._navParams.get('id');

    this.buttonText = "Scan";
    this.loading = false;
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;
    // var barcodeData = {"cancelled":0,"text":"[\n    {\n        \"id\": \"1\",\n        \"price\": 1.62,\n        \"product\": \"tamarillo\"\n    },\n    {\n        \"id\": \"1\",\n        \"price\": 0.01,\n        \"product\": \"sourdough\"\n    },\n    {\n        \"id\": \"1\",\n        \"price\": 1.25,\n        \"product\": \"mandarine\"\n    },\n    {\n        \"id\": \"1\",\n        \"price\": 1.13,\n        \"product\": \"jujube\"\n    },\n    {\n        \"id\": \"1\",\n        \"price\": 5.95,\n        \"product\": \"redcurrant\"\n    },\n    {\n        \"id\": \"1\",\n        \"price\": 3.22,\n        \"product\": \"boysenberry\"\n    },\n    {\n        \"id\": \"1\",\n        \"price\": 3.56,\n        \"product\": \"cherry\"\n    },\n    {\n        \"id\": \"b8f37c0c-3129-4492-9b12-3eec253dd454\",\n        \"price\": 1.31,\n        \"product\": \"durian\"\n    }]","format":"QR_CODE"};

    this.scanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
    console.log(barcodeData);
    this.postQRJson(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

 private postQRJson(barcodeData){
    this.dataService.postQRCodeResult(barcodeData.text)
    .subscribe(
        messages => this.showAlert(),
        error => this.error = error
    )
 }

  private showAlert() {
    console.log("message sent about to show alert")  
    let alert = this.alertCtrl.create({
      title: 'Receipt Successfully Sent!',
      subTitle: 'You can now view the detailed product breakdown',
      buttons: [{
          text: 'OK',
          handler: data => {
            console.log('Ok clicked');
            this._nav.popToRoot()
          }
        }]
    });
    alert.present();
  }


}
