import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service'

import { BasicValidators } from '../shared/basic-validators';
import { User } from '../shared/user';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mFormBuilder: FormBuilder,
    private mUserService: UserService, ) {

    this.signUpForm = this.mFormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, BasicValidators.email]],
      phone: ['', [Validators.required, BasicValidators.phone]]
    });
  }

  onSubmit() {
    var userValue = this.signUpForm.value;
    var user: User = new User();
    user.name = userValue.name;
    user.email = userValue.email;
    user.password = userValue.password;
    user.username = userValue.email;
    user.phone = userValue.phone;

    this.mUserService.signUp(user).subscribe(response => {
      if (response) {
        toast('Account created successfully!', 4000);
        this.router.navigate(['login']);
      }
    }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

}
