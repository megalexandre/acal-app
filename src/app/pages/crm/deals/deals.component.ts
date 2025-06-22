import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { RootReducerState } from 'src/app/store';
import { fetchCrmDealData } from 'src/app/store/CRM/crm_action';
import { selectCRMLoading, selectDealData } from 'src/app/store/CRM/crm_selector';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})

/**
 * Deals Component
 */
export class DealsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  deals: any;

  constructor(private modalService: NgbModal, private store: Store<{ data: RootReducerState }>) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'CRM' },
      { label: 'Deals', active: true }
    ];

    /**
 * fetches data
 */
    this.store.dispatch(fetchCrmDealData());
    this.store.select(selectCRMLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectDealData).subscribe((data) => {
      this.deals = data;
      // this.alldeals = cloneDeep(data);
      // this.company = this.service.changePage(this.allcompany)
    });
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

}
