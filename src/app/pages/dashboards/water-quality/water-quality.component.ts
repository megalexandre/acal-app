import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalWithSent } from '../address/address.model';
import { ToastService } from '../dashboard/toast-service';
import { WaterQualityCreateComponent } from './create/water-quality-create.component';
import { WaterQualityDeleteComponent } from './delete/water-quality-delete.component';
import { WaterQuality } from './water-quality.model';
import { WaterQualityService } from './water-quality.service';

@Component({
  selector: 'app-water-quality',
  templateUrl: './water-quality.component.html',
})
export class WaterQualityComponent implements OnInit{

  analises: WaterQuality[] = [];
  ready = false;

  constructor(
    private service: WaterQualityService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.ready = false;

    this.service.get().subscribe({
      next: (data) => {
        this.analises = data;
        this.ready = true;
      },
      error: () => {
        this.ready = false;
      }
    });
  }

  create(): void {
    this.openModal(WaterQualityCreateComponent);
  }

  delete(waterQuality: WaterQuality): void {
    this.openModal(WaterQualityDeleteComponent, { waterQuality });
  }

  openModal<T extends ModalWithSent>(
    component: Type<T>,
    data?: Partial<T>
  ): void {
    const modalRef = this.modalService.open(component, { centered: true });
    const componentInstance = modalRef.componentInstance;

    if (data) {
      Object.assign(componentInstance, data);
    }

    componentInstance.sent.subscribe(() => this.search());
  }

}
