import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ParseManager } from '../shared/ParseManager';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute, private mParseManager: ParseManager) { }

  ngOnInit() {
    this.mParseManager.getUserLogged((user)=>{console.log(user);});
  }

  registerCondo(){
    this.router.navigate(['condos/new']);
  }
}
