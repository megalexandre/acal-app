import { Component } from '@angular/core';

@Component({
  selector: 'app-table-header',
  template: `
    <thead class="table-light">
        <ng-content></ng-content>
    </thead>
  `
})
export class TableHeaderComponent {}