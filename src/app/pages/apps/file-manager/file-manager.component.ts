import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators } from '@angular/forms';

import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { addFile, addFolder, deleteFile, deleteFolder, fetchFileData, fetchFolderData, updateFile, updateFolder } from 'src/app/store/File Manager/filemanager_action';
import { selectFileData, selectFileLoading, selectFolderData } from 'src/app/store/File Manager/filemanager_selector';
import { cloneDeep } from 'lodash';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { FolderModel } from 'src/app/store/File Manager/filemanager_model';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
})

/**
 * FileManager Component
 */
export class FileManagerComponent implements OnInit {

  folderData!: FolderModel[];
  submitted = false;
  folderForm!: UntypedFormGroup;
  allfolder: any;
  recentForm!: UntypedFormGroup;
  recentData: any;
  files: any;
  simpleDonutChart: any;
  public isCollapsed = false;
  listData: any;
  folderList: any;


  constructor(private modalService: NgbModal, public service: PaginationService, private formBuilder: UntypedFormBuilder,
    private store: Store<{ data: RootReducerState }>) {
    this.service.pageSize = 5
  }

  ngOnInit(): void {

    document.body.classList.add('file-detail-show');

    /**
     * Form Validation
    */
    this.folderForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]]
    });

    /**
     * Recent Validation
    */
    this.recentForm = this.formBuilder.group({
      id: [''],
      icon_name: ['', [Validators.required]]
    });

    // Data Get Function
    this._fetchData();

    this._simpleDonutChart('["--vz-info", "--vz-danger", "--vz-primary", "--vz-success"]');

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

  // Chat Data Fetch
  private _fetchData() {

    this.store.dispatch(fetchFolderData());
    this.store.dispatch(fetchFileData());
    this.store.select(selectFileLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectFolderData).subscribe((data) => {
      this.folderData = data;
      this.allfolder = cloneDeep(data);
      this.folderData = this.service.changePage(this.allfolder)
    });

    this.store.select(selectFileData).subscribe((data) => {
      this.files = data;
      this.recentData = cloneDeep(data);
      this.files = this.service.changePage(this.recentData)
    });
  }

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
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
  * Form data get
  */
  get form() {
    return this.folderForm.controls;
  }

  /**
  * Save user
  */
  saveFolder() {
    if (this.folderForm.valid) {
      if (this.folderForm.get('id')?.value) {
        this.folderList.title = this.folderForm.get('title')?.value;
        const updatedData = this.folderList;
        this.store.dispatch(updateFolder({ updatedData }));
        this.modalService.dismissAll();
      } else {
        const title = this.folderForm.get('title')?.value;
        const id = (this.allfolder.length + 1).toString();
        const files = '349';
        const gb = "4.10";
        const newData = {
          id,
          title,
          files,
          gb
        };
        this.store.dispatch(addFolder({ newData }));
        this.modalService.dismissAll();
      }
    }
    this.modalService.dismissAll();
    this.folderForm.reset();
    this.submitted = true
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
    this.store.dispatch(deleteFolder({ id: this.deleteId.toString() }));
  }

  // Delete Recent Data
  deleteRecentData(id: any) {
    this.store.dispatch(deleteFile({ id: this.deleteId.toString() }));
  }

  // Folder Filter
  folderSearch() {
    var type = (document.getElementById("file-type") as HTMLInputElement).value;
    if (type) {
      this.folderData = this.allfolder.filter((data: any) => {
        return data.title === type;
      });
    }
    else {
      this.folderData = this.allfolder
    }
  }

  /**
   * Active Star
   */
  activeMenu(id: any) {
    document.querySelector('.star-' + id)?.classList.toggle('active');
  }

  /**
   * Open Recent modal
   * @param content modal content
   */
  openRecentModal(recentContent: any) {
    this.submitted = false;
    this.modalService.open(recentContent, { size: 'md', centered: true });
  }

  /**
   * Form data get
   */
  get form1() {
    return this.recentForm.controls;
  }

  /**
  * Save user
  */
  saveRecent() {
    if (this.recentForm.valid) {
      if (this.recentForm.get('id')?.value) {
        this.folderList.title = this.recentForm.get('title')?.value;
        const updatedData = this.folderList;
        this.store.dispatch(updateFolder({ updatedData }));
        this.modalService.dismissAll();
      } else {
        const id = (this.recentData.length + 1).toString();
        const icon = 'ri-file-text-fill';
        const icon_color = 'secondary';
        const icon_name = this.recentForm.get('icon_name')?.value;
        const item = '01';
        const size = "0.3 KB";
        const type = "Media";
        const date = "19 Apr, 2022";
        const newData = {
          id,
          icon,
          icon_color,
          icon_name,
          item,
          size,
          type,
          date,
        };
        this.store.dispatch(addFile({ newData }));
        this.modalService.dismissAll();
      }
    }
    this.modalService.dismissAll();
    this.recentForm.reset();
    this.submitted = true
  }

  EditFolderModal(content: any, id: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
    this.folderList = this.allfolder[id];
    this.folderForm.controls['title'].setValue(this.folderList.title);
    this.folderForm.controls['id'].setValue(this.folderList.id);
  }
  /**
   * Open modal
   * @param content modal content
   */
  editModal(recentContent: any, id: any) {
    this.submitted = false;
    this.modalService.open(recentContent, { size: 'md', centered: true });
    this.listData = this.recentData[id];
    this.recentForm.controls['icon_name'].setValue(this.listData.icon_name);
    this.recentForm.controls['id'].setValue(this.listData.id);
  }

  // OverView Chart
  /**
 * Simple Donut Chart
 */
  private _simpleDonutChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.simpleDonutChart = {
      series: [27.01, 20.87, 33.54, 37.58],
      chart: {
        height: 330,
        type: 'donut',
      },
      legend: {
        position: 'bottom'
      },
      labels: ["Documents", "Media", "Others", "Free Space"],
      dataLabels: {
        dropShadow: {
          enabled: false,
        }
      },
      colors: colors
    };
  }

  /**
 * Open modal
 * @param content modal content
 */
  editdata(id: any) {
    (document.getElementById("file-overview") as HTMLElement).style.display = "block";
    (document.getElementById("folder-overview") as HTMLElement).style.display = "none";
    var data = this.recentData.filter((data: { id: any; }) => data.id === id);
    (document.querySelector('#file-overview .file-icon i') as HTMLImageElement).className = data[0].icon + ' ' + 'text-' + data[0].icon_color;
    var file_name: any = document.querySelectorAll('#file-overview .file-name');
    file_name.forEach((name: any) => {
      name.innerHTML = data[0].icon_name
    });
    var file_size: any = document.querySelectorAll('#file-overview .file-size');
    file_size.forEach((name: any) => {
      name.innerHTML = data[0].size
    });
    var create_date: any = document.querySelectorAll('#file-overview .create-date');
    create_date.forEach((name: any) => {
      name.innerHTML = data[0].date
    });
    (document.querySelector('#file-overview .file-type') as HTMLImageElement).innerHTML = data[0].type;
  }

  // Overview Model Close
  closeModel() {
    document.body.classList.remove('file-detail-show');
  }

  /**
  * Product Filtering  
  */
  changeProducts(e: any, name: any) {

    (document.getElementById("folder-list") as HTMLElement).style.display = "none";
    this.files.subscribe((x: any) => {
      this.recentData = x.filter((product: any) => {
        return product.type === name;
      });
    });
  }

  // Pagination
  changePage() {
    this.files = this.service.changePage(this.recentData)
  }

}
