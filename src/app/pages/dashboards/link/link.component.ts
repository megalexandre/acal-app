import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithSent } from '../address/address.model';
import { Link, LinkFilter, Page } from './link.model';
import { LinkService } from './link.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
})
export class LinkComponent implements OnInit {

  page: Page<Link> | null = null;
  filter: LinkFilter = {
    category: null,
    address: null,
    letter: null,
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

  loading = true;

  constructor(
    private service: LinkService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.search();
  }


  search() {
    this.loading = true;

    this.service.paginate(this.filter).subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  trackById(index: number, item: Link): string {
    return item.id;
  }

  /** novo método para mudar de página */
  loadPage(pageNumber: number) {
    if (!this.page) return;

    // não faz nada se for fora dos limites
    if (pageNumber < 0 || pageNumber >= this.page.total_pages) {
      return;
    }

    this.filter.page = pageNumber;
    this.search();
  }

  create() {
    //this.openModal(LinkCreateComponent);
  }

  delete(link: Link) {
    //this.openModal(LinkDeleteComponent, { category });
  }

  edit(link: Link) {
    //this.openModal(LinkEditComponent, { category });
  }

  openModal<T extends ModalWithSent>(component: Type<T>, data?: Partial<T>): void {
    const componentInstance = this.modalService
      .open(component, { centered: true })
      .componentInstance;

    if (data) {
      Object.assign(componentInstance, data);
    }

    componentInstance.sent.subscribe(() => this.search());
  }
}
