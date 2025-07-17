import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-closing-deals',
    templateUrl: './closing-deals.component.html',
    styleUrls: ['./closing-deals.component.scss'],
    standalone: false
})

/**
 * Closing Deals Component
 */
export class ClosingDealsComponent implements OnInit {
  // Closing Deals
  @Input() ClosingDeals:
    | Array<{
        name?: string;
        profile?: string;
        userName?: string;
        amount?: string;
        date?: string;
      }>
    | undefined;

  constructor() {}

  ngOnInit(): void {}
}
