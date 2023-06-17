import { Component, OnInit } from '@angular/core';
import { Dashboard } from '@model/default/dashboard';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'ngx-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  public dashboard: Dashboard
  public loaded: boolean = false

  constructor(private service: HomepageService) {

  }

  ngOnInit(): void {
    this.service.get().subscribe(
      (dashboard) =>{
        this.dashboard = dashboard
        this.loaded = true

      })
  }
}
