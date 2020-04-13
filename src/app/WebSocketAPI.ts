import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {ChatPlaceComponent} from './Components/main-chat/chat-place/chat-place.component';

export class WebSocketAPI {
  webSocketEndPoint = 'http://localhost:8080/ws';
  topic = '/send/message';
  stompClient: any;
  chatComponent: ChatPlaceComponent;

  constructor(chatComponent: ChatPlaceComponent) {
    this.chatComponent = chatComponent;
  }

  _connect() {
    console.log('Initialize WebSocket Connection');
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const ythis = this;
    // tslint:disable-next-line:only-arrow-functions
    ythis.stompClient.connect({}, function(frame) {
      // tslint:disable-next-line:only-arrow-functions
      ythis.stompClient.subscribe(ythis.topic, function(sdkEvent) {
        ythis.onMessageReceived(sdkEvent);
      });
    }, this.errorCallBack);
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log('errorCallBack -> ' + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }


  _send(message) {
    console.log('calling logout api via web socket');
    this.stompClient.send('/app/hello', {}, JSON.stringify(message));
  }

  onMessageReceived(message) {
    console.log('Message Recieved from Server :: ' + message);
    this.chatComponent.massageFormat(JSON.stringify(message.body));
  }
}
