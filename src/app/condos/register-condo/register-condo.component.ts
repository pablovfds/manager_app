import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ParseManagerService } from '../../shared/parse-manager.service';
import { Condo } from '../../shared/condo';
import { BasicValidators } from '../../shared/basic-validators';


@Component({
  selector: 'app-register-condo',
  templateUrl: './register-condo.component.html',
  styleUrls: ['./register-condo.component.css']
})
export class RegisterCondoComponent implements OnInit {

  registerCondoForm: FormGroup;
  condo: Condo = new Condo();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mFormBuilder: FormBuilder,
    private mParseManagerService: ParseManagerService) {

    this.registerCondoForm = this.mFormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      address: this.mFormBuilder.group({
        num: ['', Validators.required],
        street: ['', [Validators.required, Validators.maxLength(30)]],
        neighborhood: ['', [Validators.required, Validators.maxLength(30)]],
        city: ['', [Validators.required, Validators.maxLength(30)]],
        state: ['', [Validators.required, Validators.maxLength(30)]],
        country: ['', [Validators.required, Validators.maxLength(30)]],
        zipcode: ['', [Validators.required, BasicValidators.zipcode]]
      })
    });
  }

  ngOnInit() {
  }

  registerCondo() {
    var condoFormValue = this.registerCondoForm.value;
    var condo: Condo = new Condo();
    condo.name = condoFormValue.name;
    condo.address = condoFormValue.address;
    condo.syndic = this.mParseManagerService.getUserPointer();
    this.mParseManagerService.addCondo(condo)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['home']);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

}
