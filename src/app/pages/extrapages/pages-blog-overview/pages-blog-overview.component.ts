import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-pages-blog-overview',
  standalone: true,
  imports: [CommonModule, RouterModule,NgbPaginationModule,SharedModule,SimplebarAngularModule],
  templateUrl: './pages-blog-overview.component.html',
  styleUrl: './pages-blog-overview.component.scss'
})
export class PagesBlogOverviewComponent {

  breadCrumbItems!: Array<{}>;
  listview: any
  alllistview: any;


  ngOnInIt(){
    this.breadCrumbItems = [
      { label: 'Blogs' },
      { label: 'List View', active: true }
    ];

    // Fetch Data
    // setTimeout(() => {
    //   this.listview = this.service.changePage(candidatelist);
    //   this.alllistview = candidatelist;
    //   document.getElementById('elmLoader')?.classList.add('d-none')
    // }, 1200)
  }

}
