import { Component } from '@angular/core';

import { collectionModel } from './collection.model';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { collectionData } from 'src/app/core/data';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})

/**
 * Collections Component
 */
export class CollectionsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  collectionData: collectionModel[];
  searchTerm: any;
  searchResults: any;
  allcollectionData: any[];

  constructor(public service: PaginationService) {
    this.collectionData = collectionData;
    this.allcollectionData = collectionData;
  }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Collections', active: true }
    ];
  }

  // Pagination
  changePage() {
    this.collectionData = this.service.changePage(this.allcollectionData)
  }

  // Search Data
  performSearch(): void {
    this.searchResults = collectionData.filter((item: any) => {
      return (
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.collectionData = this.service.changePage(this.searchResults)
  }

}
