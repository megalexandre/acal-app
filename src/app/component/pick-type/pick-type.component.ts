import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-pick-type',
  templateUrl: './pick-type.component.html',
})
export class PickTypeComponent {

  @Input()
  public model?: string = null;

  @Output()
  public modelChange: EventEmitter<string> = new EventEmitter<string>();

  selectedChange(event: string) {
    this.modelChange.emit(event)
  }

}
