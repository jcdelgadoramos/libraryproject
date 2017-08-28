import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users=[
    { usuario: 'user', password: 'user'},
    { usuario: 'jocho', password: 'jocho'}
  ];

  constructor() { }

  validate(username, pwd) {
    const pos = this.users.findIndex((user) => {
      return user.usuario == username && user.password == pwd;
    });
    if (pos !== -1) {
      return true;
    } else {
      return false;
    }
  }

}
