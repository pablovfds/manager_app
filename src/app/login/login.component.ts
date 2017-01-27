import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ParseManager } from '../shared/ParseManager';

import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
  errorMsg: string;
  public ErrorMessageIsVisible: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mFormBuilder: FormBuilder,
    private mParseManager: ParseManager) {

    this.logInForm = this.mFormBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmitLogIn() {
    this.errorMsg = null;
    var user = new User();
    user.email = this.logInForm.value.email;
    user.password = this.logInForm.value.password;

    this.mParseManager.logIn(user,
      (message) => {
        console.log(message);
        this.router.navigate(['home']);
      },
      (message) => {
        console.log(message);
      });
  }
}
