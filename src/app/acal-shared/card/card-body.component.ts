import { Component } from '@angular/core';

@Component({
    selector: 'app-card-body',
    template: `<div class="card-body"><ng-content></ng-content></div>`,
    standalone: false
})
export class CardBodyComponent {}