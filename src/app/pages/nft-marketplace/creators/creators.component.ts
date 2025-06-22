import { Component, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { creatorsModel, creatorsListModel } from './creators.model';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { creatorsData, creatorsListData } from 'src/app/core/data';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})

/**
 * Creators Component
 */
export class CreatorsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  creatorsData!: creatorsModel[];
  searchResults!: any[];
  searchTerm: any;
  creatorsListData!: any[];
  allcreatorsListData!: any[];


  constructor(public service: PaginationService) {
    this.service.pageSize = 10;
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Creators', active: true }
    ];

    // FetchData
    this.creatorsData = creatorsData;
    this.creatorsListData = creatorsListData;
    this.allcreatorsListData = creatorsListData;
  }

  // Pagination
  changePage() {
    this.creatorsListData = this.service.changePage(this.allcreatorsListData)
  }

  // Search Data
  performSearch(): void {
    this.searchResults = creatorsListData.filter((item: any) => {
      return (
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.creatorsListData = this.service.changePage(this.searchResults)
  }
}
