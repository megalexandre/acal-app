import { Component } from '@angular/core';

@Component({
    selector: 'app-card-footer',
    template: `<div class="card-footer"><ng-content></ng-content></div>`,
    standalone: false
})
export class CardFooterComponent {}