import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { fetchSellerListData } from 'src/app/store/Ecommerce/ecommerce_action';
import { selectDataLoading, selectSellerData } from 'src/app/store/Ecommerce/ecommerce_selector';
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})

/**
 * Sellers Component
 */
export class SellersComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  sellerList: any;
  sellers?: any;
  category: any = '';
  searchResults: any;
  searchTerm: any;

  constructor(private modalService: NgbModal,
    public service: PaginationService,
    private store: Store<{ data: RootReducerState }>) {
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Sellers', active: true }
    ];

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.store.dispatch(fetchSellerListData());
    this.store.select(selectDataLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectSellerData).subscribe((data) => {
      this.sellers = data;
      this.sellerList = cloneDeep(data);
      this.sellers = this.service.changePage(this.sellerList)
    });

  }

  // Pagination
  changePage() {
    this.sellers = this.service.changePage(this.sellerList)
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  // Category Filter
  categoryFilter() {
    if (this.category != 'All' && this.category != '') {
      this.sellers = this.sellerList.filter((seller: any) => seller.category == this.category);
    } else {
      this.sellers = this.sellerList
    }
  }

  // Search
  performSearch() {
    this.searchResults = this.sellerList.filter((item: any) => {
      return (
        item.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.sellername.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.sellers = this.service.changePage(this.searchResults)

  }

}
