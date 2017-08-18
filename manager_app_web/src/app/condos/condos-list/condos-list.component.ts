import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Condo } from '../../shared/condo';

import { CondoService } from '../../services/condo.service';

import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-condos-list',
  templateUrl: './condos-list.component.html',
  styleUrls: ['./condos-list.component.css']
})
export class CondosListComponent implements OnInit {

  public condosList: Condo[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mCondoService: CondoService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem('currentUser')).id;

    this.mCondoService.getByUserId(userId).subscribe(
      condos => {
        this.condosList = condos
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });

  }


  openCondoDetails(condo: Condo) {
    this.router.navigate(['condos/' + condo.id]);
  }

}
