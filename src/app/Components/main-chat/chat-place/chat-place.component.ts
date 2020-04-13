import {Component, OnInit} from '@angular/core';
import {User} from '../../../classes/User';
import {UsersService} from '../../../services/users.service';
import {WebSocketAPI} from '../../../WebSocketAPI';


import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {$} from 'jquery';


@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent implements OnInit {

  private serverUrl = 'http://localhost:8080/socket';
  private title = 'WebSockets chat';
  private stompClient;


  user = new User();
  date = new Date();
  webSocketAPI: WebSocketAPI;

  MassageInput = '';
  mmm = '';
  massages = [];

  constructor() {
    //  this.initializeWebSocketConnection();

  }


  ngOnInit(): void {
    if (UsersService.prototype.getUser() !== undefined) {
      this.user = UsersService.prototype.getUser();
    } else {
      this.user.Usernew('Admin', 'Admin');
    }
    this.webSocketAPI = new WebSocketAPI(new ChatPlaceComponent());
    this.webSocketAPI._connect();
  }

  SendMassage() {
    const sendDate = this.date.getTime();

    this.massages.push('<div class=\'message\'>' + '12' + '</div>');
    console.log('dfsdf' + this.MassageInput);
    document.getElementById('Input').nodeValue = '';
    this.sendMessage(this.MassageInput);

  }


  // initializeWebSocketConnection() {
  //   const ws = new SockJS(this.serverUrl);
  //   this.stompClient = Stomp.over(ws);
  //   const that = this;
  //   // tslint:disable-next-line:only-arrow-functions
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe('/chat', (message) => {
  //       if (message.body) {
  //         $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
  //         console.log(message.body);
  //       }
  //     });
  //   });
  // }

  sendMessage(message) {
    this.webSocketAPI._send(message);
    $('#input').val('');
  }

  massageFormat(message) {
    this.mmm = message;
  }


}
