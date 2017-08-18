import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Condo } from '../../shared/condo';

@Component({
  selector: 'app-condos-list',
  templateUrl: './condos-list.component.html',
  styleUrls: ['./condos-list.component.css']
})
export class CondosListComponent implements OnInit {

  public condosList: Condo[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // let objectId = this.service.getUserLogged().objectId;

    // this.service.getCondos(objectId).subscribe(
    //   condos => {
    //     this.condosList = condos
    //   }, //Bind to view
    //   err => {
    //     // Log errors if any
    //     console.log(err);
    //   });

  }


  openCondoDetails(condo: Condo) {
    // this.router.navigate(['condos/' + condo.objectId]);
  }

}
