import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UsersService {

  user: User = new User();

  constructor() { }

  signup(userForm: any){

    this.user.name = userForm.name;
    this.user.username = userForm.email;
    this.user.email = userForm.email;
    this.user.password = userForm.password;

    console.log(this.user);
    

  }

}
