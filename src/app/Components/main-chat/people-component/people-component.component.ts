import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-component.component.html',
  styleUrls: ['./people-component.component.css']
})
export class PeopleComponentComponent implements OnInit {

  constructor() {
    console.log('222222222222222222222222222');
  }

  ngOnInit(): void {
  }

}
