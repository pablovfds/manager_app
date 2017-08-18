import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../shared/user';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mFormBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {

    this.logInForm = this.mFormBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  onSubmitLogIn() {
    var user = new User();
    user.username = this.logInForm.value.email;
    user.password = this.logInForm.value.password;

    this.authenticationService
      .login(user.username, user.password)
      .subscribe(data => {
        toast(data, 4000);
        this.router.navigate(['home']);
      }, error => {
        let err = JSON.parse(error._body);
        toast(err.message, 4000);
      });
  }
}
