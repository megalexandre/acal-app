import { Component } from '@angular/core';

@Component({
  selector: 'app-card-title',
  template: `
    <h5 class="card-title flex-grow-1 mb-0"><ng-content></ng-content></h5>
  `
})
export class CardTitleComponent {}