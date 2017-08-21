import { Component, OnInit, NgZone, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Condo } from '../../_models/condo';

import { CondoService } from '../../_services/_condo/condo.service';

import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-condos-list',
  templateUrl: './condos-list.component.html',
  styleUrls: ['./condos-list.component.css']
})
export class CondosListComponent implements OnInit {

  public condosList: Condo[] = [];
  selectedCondo: Condo = new Condo();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mCondoService: CondoService) { }

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('currentUser')).id;

    this.mCondoService.getByUserId(userId).subscribe(
      condos => {
        this.condosList = condos;

        if (this.condosList.length > 0) {
          this.selectedCondo = this.condosList[0];
        }
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  setSelectedCondo(condo: Condo) {
    this.selectedCondo = condo;
  }

}
