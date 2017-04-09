import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private heroesUrl = 'http://mas-starling-rest.herokuapp.com/api/getProductsForTx/';  // URL to web API
  private allTxUrl = 'http://mas-starling-rest.herokuapp.com/api/getAllTransactions';
  private qrCodeUrl = 'http://mas-starling-rest.herokuapp.com/api/consume/qr';

  constructor (private http: Http) {}

  getProductsForTransaction(id:string) {
    return this.http.get(this.heroesUrl + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.map( (data) => { return {"price" : data.price, "product": data.product } })
  }

  getAllTransactions(){
      return this.http.get(this.allTxUrl)
                    .map(this.extractTxData)
                    .catch(this.handleError);
  }

  private extractTxData(res : Response){
      let body = res.json();
      return body.map( (data) => { return {"merchant" : data.merchant, 
          "value": data.value,
          "id": data.id,
          "receipts": data.receipts,
          "date" : data.date} 
        });
  }

  postQRCodeResult(jsonString : string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // headers.append('Content-Type', 'application/x-www-form-urlencoded')
      return this.http.post(
        this.qrCodeUrl,
        jsonString,
        { "headers" : headers }
      ).map(res => res.status)
      .catch(this.handleError)
  }



  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}