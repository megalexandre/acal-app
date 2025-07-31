import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Page } from 'src/app/pages/dashboards/link/link.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  
  @Input() page: Page<any> | null = null;
  @Output() pageChange = new EventEmitter<number>();

  get currentPage(): number {
    return this.page?.number || 0 ;
  }

  get totalPages(): number {
    return this.page?.total_pages || 0;
  }

  isFirstPage(): boolean {
    return this.page ? this.page.first : false;
  }

  isLastPage(): boolean {
    return this.page ? this.page.last : true
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber < this.totalPages) {
      this.pageChange.emit(pageNumber);
    }
  }

}