import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithSent } from '../../address/address.model';
import { WaterQuality } from '../water-quality.model';
import { WaterQualityService } from '../water-quality.service';

@Component({
  selector: 'app-water-quality-delete',
  templateUrl: './water-quality-delete.component.html',
})
export class WaterQualityDeleteComponent implements ModalWithSent {

  @Input() 
  public waterQuality!: WaterQuality;
  
  @Output() 
  public sent = new EventEmitter<void>();
  
  constructor(
    private service: WaterQualityService,
    public activeModal: NgbActiveModal,
  ) {

  }

  close() {
    this.activeModal.dismiss('cancel');
  }

  confirm() {
    this.service.delete(this.waterQuality.id).subscribe({
      next: () => {
        this.close();
        this.sent.emit();
      }
    });
  }

}

