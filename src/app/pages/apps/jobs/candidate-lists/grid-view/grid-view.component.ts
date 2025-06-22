import { Component, OnInit } from '@angular/core';

import { PaginationService } from 'src/app/core/services/pagination.service';
import { candidatelist } from 'src/app/core/data';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  gridview: any;
  allgridList: any;
  searchResults: any;
  searchTerm: any;


  constructor(public service: PaginationService) {
    this.service.pageSize = 20
  }

  ngOnInit(): void {
    /**
* BreadCrumb
*/
    this.breadCrumbItems = [
      { label: 'Candidate Lists' },
      { label: 'Grid View', active: true }
    ];
    // Fetch Data
    setTimeout(() => {
      this.gridview = this.service.changePage(candidatelist);
      this.allgridList = candidatelist;
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200)

  }

  ngOnDestroy() {
    this.service.pageSize = 8
  }

  // Pagination
  changePage() {
    this.gridview = this.service.changePage(this.allgridList)
  }


  // Search Data
  performSearch(): void {
    this.searchResults = this.allgridList.filter((item: any) => {
      return (
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.rating.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.ratingCount.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.gridview = this.service.changePage(this.searchResults)
  }
}
