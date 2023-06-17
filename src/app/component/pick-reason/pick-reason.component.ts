import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-pick-reason',
  templateUrl: './pick-reason.component.html',
})
export class PickReasonComponent {

  readonly reasons = [
    { name: "Selecione", value: null },
    { name: "Hidrômetro", value:"HYDROMETER" },
    { name: "Taxa", value:"DUE" },
    { name: "Categoria", value:"CATEGORY" },
    { name: "Água", value:"WATER" },
    { name: "Pagamento de Fatura", value:"ACCOUNT_PAYMENT" }
  ]

  @Input()
  public model?: string = null;

  @Output()
  public modelChange: EventEmitter<string> = new EventEmitter<string>();

  selectedChange(event: string) {
    this.modelChange.emit(event)
  }

}
