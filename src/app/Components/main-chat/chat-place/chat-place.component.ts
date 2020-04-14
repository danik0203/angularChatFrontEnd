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
  date: Date = new Date();
  webSocketAPI = new WebSocketAPI();

  @Input() messageInput = '';
  messageOnTheScreen: string;
  example = '';
  messages = [];

  constructor() {

    if (UsersService.prototype.getUser() !== undefined) {
      this.user = UsersService.prototype.getUser();
    } else {
      this.user = new User('Admin', 'Admin');
    }


  }

  ngOnInit(): void {

    this.webSocketAPI._componentAdd(new ChatPlaceComponent());
    this.webSocketAPI._connect();


  }


  SendMassage(input: string) {
    this.messageInput = this.user.GetUserName() + ': ' + input;
    console.log('massage is: ' + this.messageInput);
    this.sendMessage(this.messageInput);
    $('#Input').val('');
  }

  sendMessage(message) {
    console.log('sending message:');
    this.webSocketAPI._send(message);

  }

  pushMassage(message: string) {

    if (message !== '') {
      const sendDate = this.date.getHours() + ':' + this.date.getMinutes();
      this.messageOnTheScreen = sendDate + ' ' + message;
      const newDiv = document.createElement('div');
      const newContent = document.createTextNode(this.messageOnTheScreen);
      newDiv.append(newContent);
      newDiv.className = 'message';
      const currentDiv = document.getElementById('chatBlock');
      document.getElementsByClassName('message').item(document.getElementsByClassName('message').length - 1).className = 'message';
      currentDiv.appendChild(newDiv);
      this.messageInput = '';
    }
  }


  // massageFormat(message) {
  //   this.example = message;
  // }


}
