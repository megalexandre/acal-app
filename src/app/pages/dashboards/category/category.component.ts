import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithSent } from '../address/address.model';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  categories: Category[] = [];
  loading = true;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Categorias', active: true }];
     this.search();
  }

  constructor(
    private service: CategoryService,
    private modalService: NgbModal,
  ) {}

  search() {
    this.loading = true;

    this.service.get().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }


  create() {
    //this.openModal(CategoryCreateComponent);
  }

  delete(place: Category) {
    //this.openModal(CategoryDeleteComponent, { place });
  }

  edit(data: Category) {
    //this.openModal(AddressEditComponent, { address });
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


