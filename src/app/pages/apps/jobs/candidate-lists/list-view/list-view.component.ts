import { Component, OnInit } from '@angular/core';
import { candidatelist } from 'src/app/core/data';

// Data Get
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  listview: any;
  alllistview: any;
  searchResults: any;
  searchTerm: any;


  constructor(public service: PaginationService) {
    this.service.pageSize = 8
  }

  ngOnInit(): void {
    /**
* BreadCrumb
*/
    this.breadCrumbItems = [
      { label: 'Candidate Lists' },
      { label: 'List View', active: true }
    ];

    // Fetch Data
    setTimeout(() => {
      this.listview = this.service.changePage(candidatelist);
      this.alllistview = candidatelist;
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200)
  }

  bookmarklist(id: any) {
    if (this.listview[id].bookmark == true) {
      this.listview[id].bookmark = false
    } else {
      this.listview[id].bookmark = true
    }
  }

  // Pagination
  changePage() {
    this.listview = this.service.changePage(this.alllistview)
  }


  // Search Data
  performSearch(): void {
    this.searchResults = this.alllistview.filter((item: any) => {
      return (
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.rating.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.ratingCount.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.listview = this.service.changePage(this.searchResults)
  }

}
