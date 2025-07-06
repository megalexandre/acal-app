import { Component, Input } from '@angular/core';

type BootstrapButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'link'
  | 'light';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type"
      [ngClass]="buttonClasses"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() btnType: BootstrapButtonType = 'primary';
  @Input() disabled = false;

  get buttonClasses(): string[] {
    return ['btn', `btn-${this.btnType}`];
  }
}