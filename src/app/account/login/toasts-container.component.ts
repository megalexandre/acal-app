import { Component, TemplateRef } from '@angular/core';

import { ToastService } from '../login/toast-service';

@Component({
  selector: 'app-toasts',
  template: `
    @for (toast of toastService.toasts; track $index) {
      <ngb-toast [class]="toast.classname" [autohide]="true" [delay]="toast.delay || 5000" (hidden)="toastService.remove(toast)">
        <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
          <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
        </ng-template>

        <ng-template #text>{{ toast.textOrTpl }}</ng-template>
      </ngb-toast>
    }
  `,
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsContainer {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: { textOrTpl: any }) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
