import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../classes/User';
import {UsersService} from '../../../services/users.service';
import {WebSocketAPI} from '../../../WebSocketAPI';
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

  cons = 0;
  user: User;
  date: Date;
  webSocketAPI;

  @Input() messageInput = '';
  messageOnTheScreen: string;
  example = '';
  messages = [];

  constructor() {

    console.log('ddddsasdsad');

    this.webSocketAPI = new WebSocketAPI();

    this.webSocketAPI._componentAdd(new ChatPlaceComponent());
    this.webSocketAPI._connect();


  }

  ngOnInit(): void {
    console.log('88888888888888888888888888888888888888888');
    if (UsersService.prototype.getUser() !== undefined) {
      this.user = UsersService.prototype.getUser();
    } else {
      this.user = new User('Admin', 'Admin');
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
    this.webSocketAPI._send(message);
  }

  pushMassage(message: string) {

    console.log('pushing message:');
    if (message !== '') {
      const sendDate = this.date.getHours() + ':' + this.date.getMinutes();
      console.log('in');
      this.messages.push(sendDate + '  ' + this.user.GetUserName() + '-  ' + message);
      this.messageInput = '';
      $('#input').val('');
      // console.log(this.messages[0]);
    }
  }


  // massageFormat(message) {
  //   this.example = message;
  // }


}
