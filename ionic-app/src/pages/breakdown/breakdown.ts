import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service/data-service';

@Component({
  selector: 'product-breakdown',
  templateUrl: 'breakdown.html'
})

export class BreakDownPage{

    public products : Array<{product: string, price: string}>;
    public merchant : string;
    public value :string;
    public error : string;

    constructor(private _nav: NavController, 
                private _navParams : NavParams,
                private dataService : DataService) { }

    ionViewDidLoad(){
        var id =this._navParams.get('id');
        this.value = this._navParams.get('value');
        this.merchant = this._navParams.get('merchant');
        this.getProductBreakdown(id);
    }

    getProductBreakdown(id: string){
        this.dataService.getProductsForTransaction(id)
        .subscribe(products => this.products= products,
                   error => this.error=error)
    }
}


