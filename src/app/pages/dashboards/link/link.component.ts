import { Component, OnInit, Type } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithSent } from '../address/address.model';
import { Link, LinkFilter, Page } from './link.model';
import { LinkService } from './link.service';
import { LinkCreateComponent } from './create/link-create.component';
import { LinkDeleteComponent } from './delete/link-delete.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
})
export class LinkComponent implements OnInit {

  public reference: string | null = null;
  
  public page: Page<Link> | null = null;
  
  public filter: LinkFilter = {
    category: null,
    address: null,
    letter: null,
    group: null,
    number: null,
    deleted: false,
    active: null,
    page: 0,
    size: 20,
    sort_orders: [
      {
        'property': 'customer.normalizedName',
        'direction': 'ASC'
      }
    ]
  };

  loading = true;

  constructor(
    private service: LinkService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.search();
  }

  onPageChange(newPage: number) {
    this.filter.page = newPage -1;
    this.search();
  }

  search() {
    this.loading = true;

    this.service.paginate(this.filter).subscribe({
      next: (page: any) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  clear(){
    this.filter = {
      category: null,
      address: null,
      group: null,
      letter: null,
      deleted: false,
      active: null,
      number: null,
      page: 0,
      size: 20,
      
      sort_orders: [
        {
          'property': 'customer.normalizedName',
          'direction': 'ASC'
        }
      ]
    };

    this.search();
  }

  trackById(index: number, item: Link): string {
    return item.id;
  }

  loadPage(pageNumber: number) {
    if (!this.page) return;
    if (pageNumber < 0 || pageNumber >= this.page.total_pages) {
      return;
    }

    this.filter.page = pageNumber;
    this.search();
  }

  create() {
    this.openModal(LinkCreateComponent)
     .componentInstance.sent.subscribe(() => {
      this.search();
    });
  }

  delete(link: Link) {
    this.openModal(LinkDeleteComponent, { link } )
    .componentInstance.sent.subscribe(() => {
      this.search();
    });
  }

  edit(link: Link) {
    //this.openModal(LinkEditComponent, { category });
  }

  openModal<T extends ModalWithSent>(component: Type<T>, data?: Partial<T>): NgbModalRef {
    const modalRef = this.modalService.open(component, { centered: true });

    if (data) {
      Object.assign(modalRef.componentInstance, data);
    }

    return modalRef;
  }
}
