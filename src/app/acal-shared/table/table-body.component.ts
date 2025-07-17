import { Component } from '@angular/core';

@Component({
    selector: 'app-table-body',
    template: `
    <tbody class="list form-check-all">
        <ng-content></ng-content>
    </tbody>
  `,
    standalone: false
})
export class TableBodyComponent {}