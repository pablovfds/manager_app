import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../shared/user';
import { toast } from 'angular2-materialize';

import { SyndicService } from '../services/syndic/syndic.service';

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
    private authenticationService: AuthenticationService,
    private mSyndicService: SyndicService) {

    this.logInForm = this.mFormBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  onSubmitLogIn() {
    const username = this.logInForm.value.email;
    const password = this.logInForm.value.password;

    this.authenticationService
      .login(username, password)
      .subscribe(data => {
        toast(data, 4000);
        this.existSyndic();
      }, error => {
        const err = JSON.parse(error._body);
        toast(err.message, 4000);
      });
  }

  private existSyndic() {
    const accountId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.mSyndicService.getByUserId(accountId)
      .subscribe(response => {
        if (response.syndic) {
          localStorage.setItem('currentSyndic', JSON.stringify(response.syndic.id));
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['syndic/new']);
        }
      },
      err => {
        toast(err, 4000);
        console.log(err);
      });
  }
}
