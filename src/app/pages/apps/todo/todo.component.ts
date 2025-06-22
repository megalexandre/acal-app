import { Component, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, Validators, UntypedFormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTable } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// Todo Services
import { restApiService } from "../../../core/services/rest-api.service";

// Sweet Alert
import Swal from 'sweetalert2';

// Drag and drop
import { DndDropEvent } from 'ngx-drag-drop';

import { Todo, Assigned, project } from './todo.model';
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { addTodo, fetchTodoListData, updateTodo } from 'src/app/store/Todo/todo_action';
import { selectTodoData, selectTodoLoading } from 'src/app/store/Todo/todo_selector';
import { cloneDeep } from 'lodash';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { todoAssigned, todoProject } from 'src/app/core/data';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

/**
 * Todo Component
 */
export class TodoComponent {

  public velzonAdmin = false;
  public projectCollapsed = true;
  public skoteCollapsed = true;
  public ecommerceCollapsed = true;
  unassignedTasks!: Task[];
  todoList!: Todo[];
  submitted = false;
  ListJsDatas: any;
  todoForm!: UntypedFormGroup;
  AssignedData!: Assigned[];
  projectList!: project[];
  term: any;
  todoDatas: any;
  selectedCity: any;
  dataSource: any;

  // Project Section
  projectForm!: UntypedFormGroup;
  subItem: any = [];


  @ViewChild('dataTable')
  table!: MatTable<Todo>;
  displayedColumns: string[] = ['task', 'subItem', 'dueDate', 'status', 'priority', 'action'];

  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder, private service: PaginationService,
    private store: Store<{ data: RootReducerState }>) {
  }
  ngOnInit(): void {
    /**
     * Form Validation
     */
    this.todoForm = this.formBuilder.group({
      _id: [''],
      title: ['', [Validators.required]],
      status: ['New', [Validators.required]],
      priority: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
    });

    // Project Data
    this.projectList = Object.assign([], todoProject);
    this.AssignedData = todoAssigned;

    // Todo Data Get
    this.store.dispatch(fetchTodoListData());
    this.store.select(selectTodoLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectTodoData).subscribe((data) => {
      this.todoDatas = data;
      this.dataSource = cloneDeep(data);
    });


    /**
     * Recent Validation
    */
    this.projectForm = this.formBuilder.group({
      ids: [''],
      title: ['', [Validators.required]]
    });

    // Compose Model Hide/Show
    var isShowMenu = false;
    document.querySelectorAll(".file-menu-btn").forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        isShowMenu = true;
        document.getElementById('menusidebar')?.classList.add("menubar-show");
      });
    });
    document.querySelector('.chat-wrapper')?.addEventListener('click', function () {
      if (document.querySelector(".file-manager-sidebar")?.classList.contains('menubar-show')) {
        if (!isShowMenu) {
          document.querySelector(".file-manager-sidebar")?.classList.remove("menubar-show");
        }
        isShowMenu = false;
      }
    });

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

  // Todo Drag and droup data
  todoTable(event: CdkDragDrop<Todo[]>): void {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.table.renderRows();
  }

  /**
  * Delete Model Open
  */
  deleteId: any;
  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(id: any) {
    this.deleteId = id;
    document.getElementById('row-' + id)?.remove();
  }

  /**
   * Open modal
   * @param content modal content
  */
  openModal(content: any) {
    this.submitted = false;
    this.todoForm.reset();
    this.modalService.open(content, { size: 'md', centered: true });
  }

  /**
   * Form data get
   */
  get form() {
    return this.todoForm.controls;
  }

  /**
  * Save Todo data
  */
  saveTodo() {
    if (this.todoForm.valid) {
      if (this.todoForm.get('_id')?.value) {
        const updatedData = { assigned_to: this.subItem, ...this.todoForm.value };

        this.store.dispatch(updateTodo({ updatedData }));
      } else {
        const newData = {
          _id: (this.dataSource.length + 1).toString(),
          title: this.todoForm.value.title,
          assigned_to: this.subItem,
          status: this.todoForm.value.status,
          priority: this.todoForm.value.priority,
          due_date: this.todoForm.value.due_date,
        }
        let timerInterval: any;
        Swal.fire({
          title: 'Todo inserted successfully!',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        });

        // this.leadsForm.controls['_id'].setValue(contactId);
        this.store.dispatch(addTodo({ newData }));

      }
    }
    this.subItem = [];
    this.modalService.dismissAll();
    this.todoForm.reset();
    this.submitted = true
  }

  selectAssignee(id: any) {
    this.subItem.push(this.AssignedData[id])
  }

  /**
   * Open modal
   * @param content modal content
   */
  econtent?: any;
  content?: any;
  editModal(content: any, item: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
    this.econtent = item;
    this.todoForm.controls['title'].setValue(this.econtent.title);
    this.todoForm.controls['due_date'].setValue(this.econtent.due_date);
    this.todoForm.controls['status'].setValue(this.econtent.status);
    this.todoForm.controls['priority'].setValue(this.econtent.priority);
    this.todoForm.controls['_id'].setValue(this.econtent._id);
    this.subItem = this.econtent.assigned_to
  }

  // Location Filter
  taskFilter() {
    var status = (document.getElementById("choices-select-status") as HTMLInputElement).value;
    if (status) {
      this.todoDatas = this.dataSource.filter((data: any) => {
        return data.status === status;
      });
    }
    else {
      this.todoDatas = this.dataSource
    }
  }

  // Sort filter
  sortField: any;
  sortBy: any
  SortFilter() {
    this.sortField = (document.getElementById("choices-select-sortlist") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  // Checked Selected
  checkUncheckAll(e: any, id: any) {
    var checkboxes: any = e.target.closest('tr').querySelector('#todo' + id);
    var status: any = e.target.closest('tr').querySelector('.status');
    if (checkboxes.checked) {
      status.innerHTML = '<span class="badge text-uppercase bg-success-subtle text-success">Completed</span>'
    }
    else {
      status.innerHTML = '<span class="badge text-uppercase bg-secondary-subtle text-secondary">Inprogress</span>'
    }
  }

  //====== Project Section ======//
  /**
   * Open Project modal
   * @param projectcontent modal content
   */
  openProjectModal(projectcontent: any) {
    this.submitted = false;
    this.modalService.open(projectcontent, { size: 'md', centered: true });
  }

  /**
   * Form data get
   */
  get projectform() {
    return this.projectForm.controls;
  }

  /**
  * Save user
  */
  saveRecent() {
    if (this.projectForm.valid) {
      const id = "4";
      const title = this.projectForm.get('title')?.value;
      const coll = "newCollapsed";
      const subItem = [
        {
          version: 'v1.0.0',
          color: 'danger'
        }
      ];
      this.projectList.push({
        id,
        title,
        coll,
        subItem
      });
      this.modalService.dismissAll();
    }
    setTimeout(() => {
      this.projectForm.reset();
    }, 2000);
    this.submitted = true
  }

}
