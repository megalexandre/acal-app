import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from '../dashboard/toast-service';
import { DEFAULT_FILTER, FinancialRecord, FinancialRecordFilter } from './financial-record.model';
import { FinancialRecordService } from './financial-record.service';

@Component({
  templateUrl: './financial-record.component.html',
})
export class FinancialRecordComponent implements OnInit {

  page: any;
  filter: FinancialRecordFilter = { ...DEFAULT_FILTER, sort_orders: [...DEFAULT_FILTER.sort_orders] };
  loading = true;

  constructor(
    private service: FinancialRecordService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.search();
  }

  trackById(index: number, item: FinancialRecord): string {
    return item.id;
  }

  clear(): void {
    this.filter = { ...DEFAULT_FILTER, sort_orders: [...DEFAULT_FILTER.sort_orders] };;
    this.search();
  }
 
  search(): void {
    this.loading = true;

    this.service.paginate({...this.filter}).subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onPageChange(page: number): void {
    setTimeout(() => {
      this.filter.page = page;
      this.search();
    });
  }
  
  resetAndSerch(){
    this.reset();
    this.search();
  }

  reset(){
    this.filter.page = 0;
    this.search();
  }


}
