import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-pages-blog-grid',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pages-blog-grid.component.html',
  styleUrl: './pages-blog-grid.component.scss'
})
export class PagesBlogGridComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;



  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Blogs' },
      { label: 'List View', active: true }
    ];
  }

}
