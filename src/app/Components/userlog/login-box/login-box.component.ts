import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../classes/User';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {


  @Input() UserName: string;
  @Input() Password: string;
  user: User = new User();


  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  login() {
    console.log(this.UserName + ' ' + this.Password);

    this.user.Usernew(this.UserName, this.Password);
    console.log(this.user.GetUserName());
    UsersService.prototype.setUser(this.user);

  }
}
