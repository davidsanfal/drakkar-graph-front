import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import {DrakkarService} from '../../services/drakkar.service';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ],
  providers: [DrakkarService]
})

export class DashboardComponent implements OnInit {

  power: any;
  mode: any;

  constructor(
    private apiService: DrakkarService,
    private router: Router) {}

  getInfo(): void {
    this.apiService.getInfo()
      .subscribe(info => {
    	this.power = info.power;
    	this.mode = info.mode;
      });
  }

  ngOnInit(): void {
    this.getInfo();
  }
}
