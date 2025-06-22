import { Component, OnInit } from '@angular/core';

import { jobgrid } from 'src/app/core/data';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  jobgrids: any;
  alljobgrids: any;
  searchTerm: any;
  searchResults: any;
  date: any;

  constructor(public service: PaginationService) {
  }

  ngOnInit(): void {
    /**
 * BreadCrumb
 */
    this.breadCrumbItems = [
      { label: 'Jobs' },
      { label: 'Job Grid Lists', active: true }
    ];

    // Fetch Data
    setTimeout(() => {
      this.jobgrids = jobgrid;
      this.alljobgrids = jobgrid;
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200)

  }

  // Pagination
  changePage() {
    this.jobgrids = this.service.changePage(this.alljobgrids)
  }


  // Search Data
  performSearch(): void {
    this.searchResults = this.alljobgrids.filter((item: any) => {
      return (
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.companyname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.date.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.jobgrids = this.service.changePage(this.searchResults)
  }


}
