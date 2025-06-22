import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// Drag and drop
import { DndDropEvent } from 'ngx-drag-drop';
// Sweet Alert
import Swal from 'sweetalert2';

import { fetchKanbanListData } from 'src/app/store/Task/task_action';
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { selectKanbanData, selectTaskLoading } from 'src/app/store/Task/task_selector';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})

/**
 * Kanban Component
 */
export class KanbanComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  unassignedTasks!: Task[];
  todoTasks!: Task[];
  inprogressTasks!: Task[];
  reviewsTasks!: Task[];
  completedTasks!: Task[];
  newTasks!: Task[];
  alltask?: any;
  searchTerm: any;

  constructor(private modalService: NgbModal,
    private store: Store<{ data: RootReducerState }>,) {
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Tasks' },
      { label: 'Kanban Board', active: true }
    ];

    /**
     * Data Get Function
     */
    this._fetchData();
  }

  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }


  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;
      if (typeof index === 'undefined') {
        index = filteredList.length;
      }
      filteredList.splice(index, 0, event.data);
    }
  }

  /**
   * Data Fetch
   */
  // 
  private _fetchData() {
    this.store.dispatch(fetchKanbanListData());
    this.store.select(selectTaskLoading).subscribe((data) => {
      if (data == false) {
        document.querySelectorAll('add-btn')
        document.getElementById('add-btn')?.classList.remove('d-none')
        document.getElementById('elmLoader')?.classList.add('d-none')
      }
    });

    this.store.select(selectKanbanData).subscribe((data) => {
      this.inprogressTasks = data.filter(t => t.status === 'inprogress');
      this.unassignedTasks = data.filter(t => t.status === 'Unassigned');
      this.completedTasks = data.filter(t => t.status === 'completed');
      this.todoTasks = data.filter(t => t.status === 'todo');
      this.reviewsTasks = data.filter(t => t.status === 'reviews');
    });

  }


  /**
  * Open modal
  * @param content modal content
  */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  /**
 * Open modal
 * @param content modal content
 */
  openMemberModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  /**
 * Open modal
 * @param content modal content
 */
  openAddModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  /**
* Confirmation mail model
*/
  confirm(ev: any) {
    Swal.fire({
      title: 'Are you sure ?',
      text: 'Are you sure you want to remove this tasks ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Close'
    }).then(result => {
      if (result.value) {
        ev.target.closest('.tasks .tasks-box').remove()
        Swal.fire('Deleted!', 'Task has been deleted.', 'success');
      }
    });
  }
}
