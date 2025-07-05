import { Component, Input } from '@angular/core';

export type BootstrapButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="type" [ngClass]="btnType" [disabled]="disabled">
        <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
    button {
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    button.primary { background: #007bff; color: #fff; }
    button.secondary { background: #6c757d; color: #fff; }
    button.success { background: #28a745; color: #fff; }
    button.danger { background: #dc3545; color: #fff; }
    button.warning { background: #ffc107; color: #212529; }
    button.info { background: #17a2b8; color: #fff; }
    button.light { background: #f8f9fa; color: #212529; }
    button.dark { background: #343a40; color: #fff; }
    button.link { background: none; color: #007bff; text-decoration: underline; }
    button[disabled] { opacity: 0.6; cursor: not-allowed; }
    `
  ]
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() btnType: BootstrapButtonType = 'primary';
  @Input() disabled: boolean = false;
}
