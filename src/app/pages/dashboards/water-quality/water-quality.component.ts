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
    standalone: false
})
export class WaterQualityComponent implements OnInit{

  breadCrumbItems: Array<{ label: string; active?: boolean }> = [];

  analises: WaterQuality[] = [];
  loaded = false;

  constructor(
    private service: WaterQualityService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Dashboards' },
      { label: 'Coletas', active: true }
    ];


    this.search();
  }

  search(): void {
    this.loaded = false;

    this.service.get().subscribe({
      next: (data) => {
        this.analises = data;
      },
      error: () => {
        this.loaded = true;
        this.toastService.show("Erro ao carregar dados.", {
          classname: 'bg-danger text-white',
          delay: 15000
        });
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
