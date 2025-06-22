import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder } from '@angular/forms';

// Range Slider
import { Options } from 'ngx-slider-v2';

import { exploreModel } from './explore.model';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { exploreData } from 'src/app/core/data';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})

/**
 * Explore Component
 */
export class ExploreComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  checkedList: any;
  masterSelected!: boolean;
  basicData!: exploreModel[];
  public isCollapsed = false;
  searchResults: any;
  searchTerm: any;
  category: any = '';
  type: any = '';
  sale_type: any = '';

  constructor(private modalService: NgbModal, public service: PaginationService, private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Explore Now', active: true }
    ];

    // FetchData
    this.basicData = exploreData;
  }


  // Range Slider Data
  value = 0;
  highValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 2000
  };

  /**
   * Active Toggle navbar
   */
  activeMenu(id: any) {
    document.querySelector('.heart_icon_' + id)?.classList.toggle('active');
  }

  // Search Data
  performSearch(): void {
    this.searchResults = exploreData.filter((item: any) => {
      return (
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.basicData = this.service.changePage(this.searchResults)
  }

  categoryFilter() {
    if (this.category != '') {
      this.basicData = exploreData.filter((data: any) => data.category == this.category);
    } else {
      this.basicData = exploreData;
    }
  }

  typeFilter() {
    if (this.type != '') {
      this.basicData = exploreData.filter((data: any) => data.type == this.type);
    } else {
      this.basicData = exploreData;
    }
  }

  saleFilter() {
    if (this.sale_type != '') {
      this.basicData = exploreData.filter((data: any) => data.sale_type == this.sale_type);
    } else {
      this.basicData = exploreData;
    }
  }

}
