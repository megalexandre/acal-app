import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address, ModalWithSent } from '../../address/address.model';
import { LinkService } from '../link.service';
import { ToastrService } from 'ngx-toastr';
import { Link } from '../link.model';

  @Component({
    templateUrl: './link-delete.component.html',
  })
  export class LinkDeleteComponent implements OnInit, ModalWithSent {
  
    @Output()
    public sent = new EventEmitter<string>();

    @Input() 
    public link!: Link;
      
    constructor(
      private service: LinkService,
      public activeModal: NgbActiveModal,
      private t: ToastrService,
    ) {

    }

    ngOnInit(): void {
      
    }

    delete(){
      this.service.delete(this.link.id).subscribe({
        next: () => {
          this.t.success('Link deletado');
          this.activeModal.close();
          this.sent.emit(this.link.id);
        },
        error: (error) => {
          this.t.error('Error deleting link: ' + error.message);
        }
      });
    }

    inactivate(){
      this.service.inactivate(this.link.id).subscribe({
        next: () => {
          this.t.success('Link inativado');
          this.activeModal.close();
          this.sent.emit(this.link.id);
        },
        error: (error) => {
          this.t.error('Error deleting link: ' + error.message);
        }
      });
    }

    activate(){
      this.service.activate(this.link.id).subscribe({
        next: () => {
          this.t.success('Link ativado');
          this.activeModal.close();
          this.sent.emit(this.link.id);
        },
        error: (error) => {
          this.t.error('Error activating link: ' + error.message);
        }
      });
    }

    close() {
      this.activeModal.close();
    }
    
  }
