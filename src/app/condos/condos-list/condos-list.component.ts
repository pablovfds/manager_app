import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ParseManager } from '../../shared/ParseManager';
import { Condo } from '../../shared/condo';

import { ParseServiceService } from '../../shared/parse-service.service';

@Component({
  selector: 'app-condos-list',
  templateUrl: './condos-list.component.html',
  styleUrls: ['./condos-list.component.css']
})
export class CondosListComponent implements OnInit {

  public condosList: Condo[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private mParseManager: ParseManager, 
    private service: ParseServiceService) { }

  ngOnInit() {
    this.mParseManager.getUserLogged((user) => {
      this.service.getCondos(user).subscribe(
      condos => {
        this.condosList = condos
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
    });
  }


  openCondoDetails(condo: Condo) {
    this.router.navigate(['condos/' + condo.objectId]);
  }

}
