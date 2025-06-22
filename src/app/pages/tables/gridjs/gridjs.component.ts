import {Component, QueryList, ViewChildren} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import {GridJsModel} from './gridjs.model';
import { GridJsService } from './gridjs.service';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-gridjs',
  templateUrl: './gridjs.component.html',
  styleUrls: ['./gridjs.component.scss'],
  providers: [GridJsService, DecimalPipe]
})

/**
 * Gridjs Table Component
 */
export class GridjsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // Table data
  gridjsList$!: Observable<GridJsModel[]>;
  total$: Observable<number>;
  griddata: any;

  constructor(private modalService: NgbModal,public service: GridJsService, private sortService: PaginationService) {
    this.gridjsList$ = service.countries$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'Grid Js', active: true }
    ];

    this.gridjsList$.subscribe((data: any) => {
      this.griddata = Object.assign([], data)
    })
  }

  // Sort Data
  onSort(column: any) {
    this.griddata= this.sortService.onSort(column, this.griddata)
  }


}
