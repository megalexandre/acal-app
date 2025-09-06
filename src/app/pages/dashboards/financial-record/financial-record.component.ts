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

  print() {
    this.service.print(this.filter).subscribe({
      next: (bytes) => {
        const blob = new Blob([bytes], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        window.open(url, '_blank');

      },
      error: () => {
        this.toastService.show('Erro ao realizar o download do arquivo.');
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
