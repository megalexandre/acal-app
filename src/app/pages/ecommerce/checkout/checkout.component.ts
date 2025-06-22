import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbNav } from '@ng-bootstrap/ng-bootstrap';

// Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [NgbNav],
})

/**
 * Checkout Component
 */
export class CheckoutComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;

  @ViewChild(NgbNav) nav!: NgbNav;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Checkout', active: true }
    ];
  }

  /**
   * Confirmation mail model
   */
  confirm(content:any) {
    this.modalService.open(content, { centered: true });
  }

   /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  changeActiveTab(tabId: any) {
    this.nav.select(tabId);
  }

}
