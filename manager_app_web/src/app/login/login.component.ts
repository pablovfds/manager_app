import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ParseManagerService } from '../shared/parse-manager.service';
import { AuthenticationService } from '../services/authentication.service';

import { User } from '../shared/user';

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

    this.authenticationService.login(user.username, user.password)
      .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['home']);
      },
      error => {
        var x = document.getElementById("snackbar")

        let err = JSON.parse(error);

        // Add the "show" class to DIV
        x.className = "show";
        x.innerHTML = err._body;

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      });
  }
}
