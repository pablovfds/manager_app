import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  contactForm: FormGroup;

  constructor (private fb: FormBuilder) {

    this.contactForm = this.fb.group({
        name: ['',[ Validators.required,Validators.minLength(10)]],
        password: ['',[ Validators.required,Validators.minLength(8)]],
        email: ['', Validators.required],
        phone: ['', Validators.required]
      });
  }

  onSubmit() {
      console.log(this.contactForm.value);
  }

}
