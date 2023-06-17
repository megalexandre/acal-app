import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-input-currency',
  templateUrl: './input-currency.component.html',
})
export class InputCurrencyComponent {

  @Input()
  public status: string = 'basic';

  @Input()
  public currency?: number = null;

  @Input()
  public disabled: boolean = false;

  @Output()
  public currencyChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public emit(){
    this.currencyChange.emit(Number(this.currency))
  }

}
