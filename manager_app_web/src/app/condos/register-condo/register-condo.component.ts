import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Condo } from '../../shared/condo';
import { BasicValidators } from '../../shared/basic-validators';
import { CondoService } from '../../services/condo.service';

import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-register-condo',
  templateUrl: './register-condo.component.html',
  styleUrls: ['./register-condo.component.css']
})
export class RegisterCondoComponent {

  registerCondoForm: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mFormBuilder: FormBuilder,
    private mCondoService: CondoService) {

    this.registerCondoForm = this.mFormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: this.mFormBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zipcode: ['', [Validators.required, BasicValidators.zipcode]]
      })
    });
  }

  registerCondo() {
    let condoFormValue = this.registerCondoForm.value;
    let condo: Condo = new Condo();
    condo.name = condoFormValue.name;
    condo.address = condoFormValue.address;
    condo.syndic = JSON.parse(localStorage.getItem('currentSyndic'));
    this.mCondoService.create(condo)
      .subscribe(response => {
        toast(response.message, 4000);
        this.router.navigate(['home']);
      },
      err => {
        toast(err, 4000);
        console.log(err);
      });
  }
}
