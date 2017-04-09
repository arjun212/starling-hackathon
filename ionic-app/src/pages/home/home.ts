import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import {Component, NgZone} from "@angular/core";
import * as io from 'socket.io-client';
import {SocketService} from '../../providers/socket-service/socket-service';
import {BreakDownPage} from '../breakdown/breakdown';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  messages: any;
    socketHost: string;
    zone: NgZone;
    chatBox: string;
    json: string;

    constructor(http: Http, public socket: SocketService, private _nav: NavController) {
        this.messages = [];
        this.socketHost = "http://mas-starling-rest.herokuapp.com/";
        this.zone = new NgZone({enableLongStackTrace: false});
       
        this.chatBox = "";
        this.json = "";
        this.socket.socketService.subscribe(event => {
        console.log('message received from server... ', event);
        if (event.category === 'message'){
          this.zone.run(() => {
            console.log("here")
            this.messages.push(event.message);
          });
        }
      }); //end of subscribe

    }


    send(message) {
        let newMsg = message//this.formatMessage(message);
        if (newMsg) {
          // let newMsg = this.formatMessage(msg);
          this.socket.sendMessage(newMsg);
          console.log('emitting: ', newMsg);
        }
        this.json = '';
    }

    getBreakDown(id: string){
      this._nav.push(BreakDownPage, {
        id: id,
      })
    }

}
