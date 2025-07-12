import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReferenceValidators } from '../validator/reference.validator';

@Component({
  selector: 'app-input-reference', 
  templateUrl: './reference-input.component.html',
})
export class ReferenceInputComponent implements OnChanges {

  @Input() reference!: FormControl;
  @Input() submitted!: boolean;
  @Input() placeholder: string = 'YYYY-MM';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reference'] && this.reference) {
      const currentValidators = this.reference.validator 
        ? [this.reference.validator] : [];
      
      this.reference.setValidators([
        ...currentValidators,
        Validators.required,
        ReferenceValidators.valid()
      ]);
      
      this.reference.updateValueAndValidity();
    }

    if (changes['submitted']) {
      const prev = changes['submitted'].previousValue;
      const current = changes['submitted'].currentValue;

      if (current === true && prev !== true) {
        this.reference.markAsTouched();
        this.reference.updateValueAndValidity();
      }
    }
  }

  isInvalid(): boolean {
    if(!this.submitted ){
      return false
    }

    return this.reference?.touched && this.reference?.invalid;
  }

  isValid(): boolean{
    if(!this.submitted ){
      return false
    }

    return this.reference?.touched && this.reference?.valid
  }
}