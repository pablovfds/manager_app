import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Condo } from '../../_models/condo';

@Component({
  selector: 'app-condo-details',
  templateUrl: './condo-details.component.html',
  styleUrls: ['./condo-details.component.css']
})
export class CondoDetailsComponent implements OnInit, OnChanges {
  @Input() data: Condo;

  condo: Condo;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.condo = this.data;
    }
  }

  openDialogEditCondo () {
    this.condo = new Condo();
  }

  openDialogRemoveCondo () {

  }

}
