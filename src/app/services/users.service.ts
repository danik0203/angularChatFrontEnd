import {Injectable} from '@angular/core';
import {User} from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  user = new User();

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }


}
