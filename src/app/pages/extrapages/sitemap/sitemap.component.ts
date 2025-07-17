import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sitemap',
    templateUrl: './sitemap.component.html',
    styleUrls: ['./sitemap.component.scss'],
    standalone: false
})

/**
 * Sitemap Component
 */
export class SitemapComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() {}

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [{ label: 'Pages' }, { label: 'Sitemap', active: true }];
  }
}
