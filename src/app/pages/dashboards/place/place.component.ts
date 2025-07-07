import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaceService } from './place.service';
import { Place } from './place.model';
import { PlaceCreateComponent } from './create/place-create.component';
import { ModalWithSent } from '../address/address.model';
import { PlaceDeleteComponent } from './delete/place-delete.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
})
export class PlaceComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  places: Place[] = [];
  loading = true;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Residências', active: true }];
     this.search();
  }

  constructor(
    private service: PlaceService,
    private modalService: NgbModal,
  ) {}

  search() {
    this.loading = true;

    this.service.get().subscribe({
      next: (places) => {
        this.places = places;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
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


