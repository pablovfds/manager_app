import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ParseManager } from '../shared/ParseManager';

import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private mFormBuilder: FormBuilder,
    private mParseManager: ParseManager) {

    this.logInForm = this.mFormBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmitLogIn() {
    var user = new User();
    user.email = this.logInForm.value.email;
    user.password = this.logInForm.value.password;

    this.mParseManager.logIn(user, (message) => {
      console.log(message);
    },
    (message) => {
      console.log(message);
    });
  }

}
