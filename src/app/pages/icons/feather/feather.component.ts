import { Component, OnInit } from '@angular/core';
import { Icons } from './feather-icons.model';
import { ToastService } from './toast-service';
import { IconsData } from 'src/app/core/data';

@Component({
  selector: 'app-feather',
  templateUrl: './feather.component.html',
  styleUrls: ['./feather.component.scss']
})

/**
 * Feather Component
 */
export class FeatherComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  IconsData!: Icons[];

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Feather', active: true }
    ];

    setTimeout(() => {
      /***
      * All Data Get
      */
      this.fetchData();
    }, 300);
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.IconsData = IconsData;
  }


  copytext(icon: any) {
    navigator.clipboard.writeText(icon);
    this.toastService.show(icon + ' icon Copied Successfully !!!', { classname: 'bg-success text-center text-white', delay: 5000 });
  }
}
