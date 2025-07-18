import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content select="app-card-header"></ng-content>
      <ng-content select="app-card-body"></ng-content>
      <ng-content select="app-card-footer"></ng-content>
    </div>
  `
})
export class CardComponent {}