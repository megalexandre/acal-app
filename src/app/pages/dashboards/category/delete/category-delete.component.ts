import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { ModalWithSent } from '../../address/address.model';

@Component({
    selector: 'app-category-delete',
    templateUrl: './category-delete.component.html',
    standalone: false
})
export class CategoryDeleteComponent implements ModalWithSent {

  @Input() 
  public category!: Category;
  
  @Output() 
  public sent = new EventEmitter<void>();
  
  constructor(
    private categoryService: CategoryService,
    public activeModal: NgbActiveModal,
  ) {

  }

  close() {
    this.activeModal.dismiss('cancel');
  }

  confirm() {
    this.categoryService.delete(this.category.id).subscribe({
      next: () => {
        this.close();
        this.sent.emit();
      }
    });
  }

}

