import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ParseManagerService } from '../shared/parse-manager.service';

import { BasicValidators } from '../shared/basic-validators';
import { User } from '../shared/user';

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
    private mParseManagerService: ParseManagerService) {

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

    this.mParseManagerService.signUp(user).subscribe(response => {
      if (response) {
        console.log("Account created successfully");
        this.router.navigate(['login']);
      }
    }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

}
