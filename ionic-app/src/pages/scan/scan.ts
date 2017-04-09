import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {ScanResultPage} from '../scan-result/scan-result';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private id: string;
  public eventTitle: string;

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private scanner : BarcodeScanner) {
  }

  ionViewDidLoad() {
    this.id = this._navParams.get('id');
    this.eventTitle = this._navParams.get('eventTitle');

    this.buttonText = "Scan";
    this.loading = false;
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;

    this.scanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      this.goToResult(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

  private goToResult(barcodeData) {
    this._nav.push(ScanResultPage, {
      scannedText: barcodeData.text
    });
    console.log("success");
  }

  private checkPass(data) {
  }
}
