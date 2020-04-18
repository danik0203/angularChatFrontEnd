import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {

  private serverUrl = 'http://localhost:8080/socket';
  private stompClient;
  public showPeople = false;
  showFiller = false;
  constructor() {

  }

  ngOnInit(): void {
  }

  showPeopleFunc() {
    window.document.getElementById('expansionField').style.visibility = 'visible';
    this.showPeople = !this.showPeople;
  }


}
