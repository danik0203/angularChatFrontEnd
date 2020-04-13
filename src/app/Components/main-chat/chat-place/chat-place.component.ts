import {Component, Input, OnInit} from '@angular/core';
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

  @Input() messageInput = '';
  messageOnTheScreen: string;
  example = '';
  messages = [];

  constructor() {


    // this.webSocketAPI = new WebSocketAPI(new ChatPlaceComponent());
    // this.webSocketAPI._connect();
  }

  ngOnInit(): void {
    if (UsersService.prototype.getUser() !== undefined) {
      this.user = UsersService.prototype.getUser();
    } else {
      this.user.Usernew('Admin', 'Admin');
    }

  }


  SendMassage(input: string) {
    this.messageInput = input;
    console.log('massage is: ' + this.messageInput);
    this.sendMessage(this.messageInput);
    this.pushMassage(this.messageInput);
  }

  sendMessage(message) {
    console.log('sending message:');
  //  this.webSocketAPI._send(message);
  }

  pushMassage(message: string) {

    console.log('pushing message:');
    if (message !== '') {
      const sendDate = this.date.getHours() + ':' + this.date.getMinutes();
      console.log('in');
      this.messages.push(sendDate + '  ' + this.user.GetUserName() + '-  ' + message);
      this.messageInput = '';
      // console.log(this.messages[0]);
    }
  }


  // massageFormat(message) {
  //   this.example = message;
  // }


}
