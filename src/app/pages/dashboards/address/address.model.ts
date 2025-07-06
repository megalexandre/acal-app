
import { EventEmitter } from '@angular/core';

export interface Address {
  id: string;
  name: string;
}

export interface ModalWithSent {
  sent: EventEmitter<any>;
}
