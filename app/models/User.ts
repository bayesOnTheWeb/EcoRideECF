export class UserClass {
  email: string;
  password: string;
  confirmPassword?: string;
  username: string;
  status: number = 2;

  constructor(
    email: string,
    password: string,
    username: string,
    confirmPassword: string,
  ) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.username = username;
  }
}
