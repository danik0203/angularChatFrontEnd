export class User {

  private Id: number;
  private Username: string;
  private Password: string;


  constructor(username: string, password: string) {

    this.Username = username;
    this.Password = password;
  }

  public GetUserName() {
    return this.Username;
  }

  public GetPassword() {
    return this.Password;
  }
}
