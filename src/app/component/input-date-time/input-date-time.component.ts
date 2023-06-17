import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-input-date-time',
  templateUrl: './input-date-time.component.html',
})
export class InputDateTimeComponent {

  @Input()
  public dateTime?: string = null;

  @Output()
  public dateTimeChange?: EventEmitter<string> = new EventEmitter<string>();

  emit() {
    const val = this.dateTime
  }

}
