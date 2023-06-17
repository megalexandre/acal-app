import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '@model/default/dashboard';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  {

  @Input()
  public dashboard: Dashboard

}
