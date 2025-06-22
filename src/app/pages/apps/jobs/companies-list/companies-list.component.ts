import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { companieslist } from 'src/app/core/data';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  companies: any;
  allcompanies: any;
  followbtn: any = 1;
  followtxt: any = 'Follow';
  searchTerm: any;
  jobdetail: any;
  searchResults: any;
  date: any;

  constructor(public service: PaginationService) {
    this.service.pageSize = 16
  }

  ngOnInit(): void {
    /**
* BreadCrumb
*/
    this.breadCrumbItems = [
      { label: 'Companies' },
      { label: 'Companies List', active: true }
    ];

    // Fetch Data
    setTimeout(() => {
      this.companies = this.service.changePage(companieslist);
      this.allcompanies = companieslist
      this.jobdetail = this.companies[0]
      document.getElementById('elmLoader')?.classList.add('d-none')
      document.getElementById('job-overview')?.classList.remove('d-none')
    }, 1200)

  }

  ngOnDestroy() {
    this.service.pageSize = 8
  }

  // Pagination
  changePage() {
    this.companies = this.service.changePage(this.allcompanies)
  }

  // Search Data
  performSearch(): void {
    this.searchResults = this.allcompanies.filter((item: any) => {
      return (
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.companies = this.service.changePage(this.searchResults)
  }

  // Go Detail
  companydetail(id: any) {
    this.jobdetail = this.companies[id]
  }

  // Follow - unfollow
  followClick(ev: any) {
    if (this.followbtn == '1') {
      this.followbtn = '2'
      this.followtxt = 'Unfollow'
      document.getElementById('togglefollow')?.classList.replace('btn-soft-success', 'btn-success')
    } else {
      this.followbtn = '1'
      this.followtxt = 'Follow'
      document.getElementById('togglefollow')?.classList.replace('btn-success', 'btn-soft-success')
    }
  }

}
