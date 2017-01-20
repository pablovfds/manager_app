import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

import { BasicValidators } from '../shared/basic-validators';

import {UsersService} from '../shared/users.service';

import { User } from '../shared/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;

  constructor (private mFormBuilder: FormBuilder, private mUsersService: UsersService) {

    this.signUpForm = this.mFormBuilder.group({
        name: ['',[ Validators.required,Validators.minLength(10)]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        email: ['', [Validators.required, BasicValidators.email]],
        phone: ['', [Validators.required, BasicValidators.phone]]
      });
  }

  onSubmit() {   
    this.mUsersService.signup(this.signUpForm.value);
  }

}
