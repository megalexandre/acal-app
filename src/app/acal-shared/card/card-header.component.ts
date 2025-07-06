import { Component } from '@angular/core';

@Component({
  selector: 'app-card-header',
  template: `
  <div class="card-header d-flex align-items-center">
    <ng-content></ng-content>
  </div>`
})
export class CardHeaderComponent {}