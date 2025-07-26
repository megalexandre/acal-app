import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaceService } from './place.service';
import { Place, PlaceFilter } from './place.model';
import { PlaceCreateComponent } from './create/place-create.component';
import { ModalWithSent } from '../address/address.model';
import { PlaceDeleteComponent } from './delete/place-delete.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
})
export class PlaceComponent implements OnInit {

  page: any;
  filter: PlaceFilter = {
    page: 0,
    size: 10,
    sort_orders: [{ property: 'name', direction: 'ASC' }]
  };
  
  loading = true;

  ngOnInit(): void {
     this.search();
  }

  constructor(
    private service: PlaceService,
    private modalService: NgbModal,
  ) {}

 search(): void {
    this.loading = true;

    this.service.paginate(this.filter).subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onPageChange(newPage: number) {
    this.filter.page = newPage -1;
    this.search();
  }

  trackById(index: number, item: Place): string {
    return item.id;
  }

  create() {
    this.openModal(PlaceCreateComponent);
  }

  delete(place: Place) {
    this.openModal(PlaceDeleteComponent, { place });
  }

  edit(data: Place) {
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

