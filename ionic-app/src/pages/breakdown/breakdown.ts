import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'product-breakdown',
  templateUrl: 'breakdown.html'
})

export class BreakDownPage{

    public products : Array<{product: string, price: string}>

    constructor(private _nav: NavController, private _navParams : NavParams) { }

    ionViewDidLoad(){
        var id =this._navParams.get('id');
    }

    getProductBreakdown(){}
}


