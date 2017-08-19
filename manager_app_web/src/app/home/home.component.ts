import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Condo } from '../shared/condo';

import { RegisterCondoComponent } from '../condos/register-condo/register-condo.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(RegisterCondoComponent)
  private madal1: RegisterCondoComponent;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

  }

  registerCondo() {
    this.madal1.modalOpen();
  }

  openCondoDetails(condo: Condo) {

  }
}
