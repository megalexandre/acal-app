import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-top-pages',
    templateUrl: './top-pages.component.html',
    styleUrls: ['./top-pages.component.scss'],
    standalone: false
})

/**
 * Top Pages Component
 */
export class TopPagesComponent implements OnInit {
  // Top Selling data
  @Input() TopPages:
    | Array<{
        page?: string;
        active?: string;
        users?: string;
      }>
    | undefined;

  constructor() {}

  ngOnInit(): void {}
}
