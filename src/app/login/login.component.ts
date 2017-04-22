import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ParseManagerService } from '../shared/parse-manager.service';

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
    private mParseManager: ParseManagerService) {

    this.logInForm = this.mFormBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmitLogIn() {
    var user = new User();
    user.username = this.logInForm.value.email;
    user.password = this.logInForm.value.password;

    this.mParseManager.logIn(user).subscribe(
      response => {
        if (response) {
        
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.router.navigate(['home']);
        }
      }, //Bind to view
      err => {
        // Log errors if any
        var x = document.getElementById("snackbar")

          // Add the "show" class to DIV
          x.className = "show";
          x.innerHTML = err;

          // After 3 seconds, remove the show class from DIV
          setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        console.log(err);
      });
  }
}
