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
    standalone: false
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() btnType: BootstrapButtonType = 'primary';
  @Input() disabled = false;
  @Input() outline: boolean | string = false;

  get buttonClasses(): string[] {
    const baseClass = this.isOutline ? 'btn-outline' : 'btn';

    return ['btn', `${baseClass}-${this.btnType}`];
  }

  get isOutline(): boolean {
    return this.outline === '' || this.outline === true || this.outline === 'true';
  }
}