import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../classes/User';
import {UsersService} from '../../../services/users.service';
import {WebSocketAPI} from '../../../WebSocketAPI';
import {$} from 'jquery';
import {element} from 'protractor';


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
  lastMessageIndex = 0;
  webSocketAPI = new WebSocketAPI();
  @Input() messageInput = '';

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
    this.webSocketAPI._send(this.messageInput);
   // this.pushMassage(this.messageInput);

  }

  pushMassage(message: string) {

    if (message !== '') {
      const sendDate = this.date.getHours() + ':' + this.date.getMinutes();
      const fullMessage = sendDate + '-  ' + message;
      const messageDiv = document.createElement('div');
      messageDiv.innerText = fullMessage;

      // const timeDiv = document.createElement('div');
      // // const timeP = document.createElement('P');
      // timeP.innerText = sendDate;
      // timeDiv.appendChild(timeP);
      document.getElementById('chatBlock').appendChild(messageDiv);
      const chatBlock = document.getElementById('chatBlock');


      // const div = chatBlock.get('div')[this.lastMessageIndex - 1];
      // div.className = 'sendTime';

      document.getElementById('input').nodeValue = '';
      this.messageInput = '';
    }
  }


  // massageFormat(message) {
  //   this.example = message;
  // }


}
