import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, Validators, UntypedFormGroup, UntypedFormArray, AbstractControl } from '@angular/forms';
// Sweet Alert
import Swal from 'sweetalert2';
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { addApikey, deleteApikey, fetchApikeyData, updateApikey } from 'src/app/store/APIKey/apikey_action';
import { selectApikeyData, selectApikeyLoading } from 'src/app/store/APIKey/apikey_selector';
import { cloneDeep } from 'lodash';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.scss'],
})
export class ApikeyComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  apikeys: any;
  masterSelected!: boolean;

  // Form
  ApiForm!: UntypedFormGroup;
  submitted = false;
  apikeyField: any;
  apiname: any;

  EditedData: any;
  allapikeys: any;

  constructor(
    private modalService: NgbModal,
    public formBuilder: UntypedFormBuilder,
    public service: PaginationService,
    private store: Store<{ data: RootReducerState }>,
  ) {}

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [{ label: 'Apps' }, { label: 'Api Key', active: true }];

    // Validation
    this.ApiForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      apikey: [''],
    });

    // Fetch Data
    this.store.dispatch(fetchApikeyData());
    this.store.select(selectApikeyLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectApikeyData).subscribe((data) => {
      this.apikeys = data;
      this.allapikeys = cloneDeep(data);
      this.apikeys = this.service.changePage(this.allapikeys);
    });
  }

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };

  /**
   * Returns form
   */
  get form() {
    return this.ApiForm.controls;
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    // this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  // Check Box Checked Value Get
  checkedValGet: any[] = [];
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.apikeys.forEach((x: { state: any }) => (x.state = ev.target.checked));
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.apikeys.length; i++) {
      if (this.apikeys[i].state == true) {
        result = this.apikeys[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal;
    checkedVal.length > 0 ? ((document.getElementById('remove-actions') as HTMLElement).style.display = 'block') : ((document.getElementById('remove-actions') as HTMLElement).style.display = 'none');
  }
  isAllChecked() {
    return this.apikeys.every((_: { state: any }) => _.state);
  }

  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.apikeys.length; i++) {
      if (this.apikeys[i].state == true) {
        result = this.apikeys[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal;
    checkedVal.length > 0 ? ((document.getElementById('remove-actions') as HTMLElement).style.display = 'block') : ((document.getElementById('remove-actions') as HTMLElement).style.display = 'none');
  }

  // Pagination
  changePage() {
    this.apikeys = this.service.changePage(this.allapikeys);
  }

  // Sort Data
  onSort(column: any) {
    this.apikeys = this.service.onSort(column, this.allapikeys);
  }

  // Create New Api
  createApi() {
    if (this.apiname) {
      document.getElementById('api-key-error-msg')?.classList.add('d-none');
      document.getElementById('apikey-element')?.classList.remove('d-none');

      this.apikeyField = this.generateApiID();
      document.getElementById('createApi-btn')?.classList.add('d-none');
      document.getElementById('add-btn')?.classList.remove('d-none');
    } else {
      document.getElementById('api-key-error-msg')?.classList.remove('d-none');
    }
  }

  // Add Api
  addApi() {
    const name = this.apiname;
    const key = this.apikeyField;

    const newData = {
      id: this.allapikeys.length + 1,
      name,
      createdby: 'Tara Hawkins',
      key,
      status: 'Active',
      color: 'success',
      create_date: '24 Sep 2022',
      expiry_date: '24 Jan 2023',
    };
    this.store.dispatch(addApikey({ newData }));
    let timerInterval: any;
    this.modalService.dismissAll('close click');
    Swal.fire({
      icon: 'success',
      text: 'Application inserted succefully!',
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
    this.apiname = '';
  }
  RenameModal(content: any, id: any) {
    this.modalService.open(content, { size: 'md', centered: true });
    var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
    modelTitle.innerHTML = 'Rename API name';
    document.getElementById('createApi-btn')?.classList.add('d-none');
    document.getElementById('edit-btn')?.classList.remove('d-none');
    document.querySelector('#apikey-element')?.classList.remove('d-none');
    this.apikeyField = this.apikeys[id].key;
    this.apiname = this.apikeys[id].name;
    this.EditedData = this.apikeys[id];
  }

  // Edit Api
  editApi() {
    var updatedData = {
      id: this.EditedData.id,
      name: this.apiname,
      createdby: this.EditedData.createdby,
      key: this.apikeyField,
      status: this.EditedData.status,
      color: this.EditedData.color,
      create_date: this.EditedData.create_date,
      expiry_date: this.EditedData.expiry_date,
    };
    this.store.dispatch(updateApikey({ updatedData }));
    this.modalService.dismissAll();
    this.apiname = '';
  }

  // generateApiID
  generateApiID() {
    var d = new Date().getTime();

    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now();
    }

    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
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
    if (id) {
      document.getElementById('a_' + id)?.remove();
    }
    this.checkedValGet.forEach((item: any) => {
      document.getElementById('a_' + item)?.remove();
      this.masterSelected = false;
    });
    this.modalService.dismissAll('close click');
    let timerInterval: any;
    Swal.fire({
      title: 'Deleted!',
      text: 'Your data has been deleted.',
      icon: 'success',
      confirmButtonColor: '#299cdb',
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  }
}
