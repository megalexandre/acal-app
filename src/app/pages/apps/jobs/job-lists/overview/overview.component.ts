import { Component, OnInit } from '@angular/core';
import { joboverview } from 'src/app/core/data/jobList';

// Data Get

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  relatedjobs: any;
  bookmark: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Fetch Data
    this.relatedjobs = joboverview
  }

  bookmarklist() {
    if (this.bookmark == true) {
      this.bookmark = false
    } else {
      this.bookmark = true
    }
  }

}
