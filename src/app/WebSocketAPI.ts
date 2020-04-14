import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {ChatPlaceComponent} from './Components/main-chat/chat-place/chat-place.component';

export class WebSocketAPI {
  webSocketEndPoint = 'http://localhost:8080/socket';
  topic = '/send/message';
  stompClient: any;
  chatComponent: ChatPlaceComponent;
  that = this;

  constructor() {
  }

  _componentAdd(chatComponent: ChatPlaceComponent) {
    this.chatComponent = chatComponent;
  }


  _connect() {
    console.log('Initialize WebSocket Connection');

    const that = this.that;
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);

    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          that.onMessageReceived(message.body);

        } else {
          alert('no message');
          console.log('no message');
        }

      });

    });
  }

  private subError() {
    alert('error');
  }


  private subComplete(message) {
    alert(message.body);
  }

  // _disconnect() {
  //   if (this.stompClient !== null) {
  //     this.stompClient.disconnect();
  //   }
  //   console.log('Disconnected');
  // }
  // // on error, schedule a reconnection attempt
  // errorCallBack(error) {
  //   console.log('errorCallBack -> ' + error);
  //   setTimeout(() => {
  //     this._connect();
  //   }, 5000);
  // }


  _send(message) {
    console.log('calling logout api via web socket');
    this.stompClient.send('/app/send/message', {}, message);
  }

  onMessageReceived(message) {
    console.log('Message Recieved from Server :: ' + message);
    console.log(message);
    this.chatComponent.pushMassage(message);
  }
}
