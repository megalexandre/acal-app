import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Store
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { fetchProjectListData } from 'src/app/store/Project/project_action';
import { selectProjectData, selectprojectLoading } from 'src/app/store/Project/project_selector';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

/**
 * List Component
 */
export class ListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  projectListWidgets!: any;
  projectmodel!: any;
  sellers?: any;
  searchTerm: any;
  searchResults: any;
  allProjectList: any;

  constructor(private modalService: NgbModal,
    public service: PaginationService,
    private store: Store<{ data: RootReducerState }>,) {
    this.service.page = 1;
    this.service.pageSize = 12;
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Project List', active: true }
    ];

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {

    this.store.dispatch(fetchProjectListData());
    this.store.select(selectprojectLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectProjectData).subscribe((data) => {
      this.projectListWidgets = data;
      this.allProjectList = data;
    });
  }

  /**
  * Confirmation mail model
  */
  deleteId: any;
  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(id: any) {
    document.getElementById('pl1_' + id)?.remove();
  }

  /**
   * Active Toggle navbar
   */
  activeMenu(id: any) {
    document.querySelector('.heart_icon_' + id)?.classList.toggle('active');
  }

  // Search
  performSearch() {
    this.searchResults = this.allProjectList.filter((item: any) => {
      return (
        item.label.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.projectListWidgets = this.service.changePage(this.searchResults)

  }
}
