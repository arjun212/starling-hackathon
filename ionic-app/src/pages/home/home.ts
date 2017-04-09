import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import {Component, NgZone, ViewChild} from "@angular/core";
import * as io from 'socket.io-client';
import {SocketService} from '../../providers/socket-service/socket-service';

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

    constructor(http: Http, public socket: SocketService) {
        this.messages = [];
        this.socketHost = "http://localhost:3000";
        this.zone = new NgZone({enableLongStackTrace: false});
       
        this.chatBox = "";
        this.json = "";
        this.socket.socketService.subscribe(event => {
        console.log('message received from server... ', event);
        if (event.category === 'message'){
          this.zone.run(() => {
            this.messages.push(event.message);
          });
        }
      }); //end of subscribe

    }


    // send(message) {
    //     let newMsg = this.formatMessage(message);
    //     if (newMsg) {
    //       // let newMsg = this.formatMessage(msg);
    //       this.socket.sendMessage(newMsg);
    //       console.log('emitting: ', newMsg);
    //     }
    //     this.json = '';
    // }
}
}
