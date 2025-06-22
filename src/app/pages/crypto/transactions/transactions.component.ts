import { Component, QueryList, ViewChildren } from '@angular/core';

import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { fetchCryptoTransactionData } from 'src/app/store/Crypto/crypto_action';
import { selectCryptoLoading, selectTransacrionData } from 'src/app/store/Crypto/crypto_selector';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

/**
 * Transactions Component
 */
export class TransactionsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  masterSelected!: boolean;
  checkedList: any;

  // Table data
  TransactionList: any;
  transactions: any;
  searchResults: any;
  searchTerm: any;
  currency: any = '';

  constructor(public service: PaginationService,
    private store: Store<{ data: RootReducerState }>) {
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Crypto' },
      { label: 'Transactions', active: true }
    ];
    // this.service.currency = 'All'

    // Fetch Data
    this.store.dispatch(fetchCryptoTransactionData());
    this.store.select(selectCryptoLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectTransacrionData).subscribe((data) => {
      this.transactions = data;
      this.TransactionList = cloneDeep(data);
      this.transactions = this.service.changePage(this.TransactionList)
    });
  }

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1
  };

  CurrencyFilter() {
    if (this.currency != '') {
      this.transactions = this.TransactionList.filter((item: any) => item.currency == this.currency);
    } else {
      this.transactions = this.service.changePage(this.TransactionList)
    }
  }

  setType(type: any) {
    this.transactions = this.TransactionList.filter((item: any) => item.type == type);
  }

  // Pagination
  changePage() {
    this.transactions = this.service.changePage(this.TransactionList)
  }

  // Search Data
  performSearch(): void {
    this.searchResults = this.TransactionList.filter((item: any) => {
      return (
        item.currency.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.from.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.to.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.details.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.transactions = this.service.changePage(this.searchResults)
  }

  // Sort Data
  onSort(column: any) {
    this.transactions = this.service.onSort(column, this.transactions)
  }
}

