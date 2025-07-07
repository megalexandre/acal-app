import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Place } from '../place.model';
import { PlaceService } from '../place.service';
import { ModalWithSent } from '../../address/address.model';

@Component({
  selector: 'app-place-delete',
  templateUrl: './place-delete.component.html',
})
export class PlaceDeleteComponent implements ModalWithSent {

  @Input() 
  public place!: Place;
  
  @Output() 
  public sent = new EventEmitter<void>();
  
  constructor(
    private placeService: PlaceService,
    public activeModal: NgbActiveModal,
  ) {

  }

  close() {
    this.activeModal.dismiss('cancel');
  }

  confirm() {
    this.placeService.delete(this.place.id).subscribe({
      next: () => {
        this.close();
        this.sent.emit();
      }
    });
  }

}

