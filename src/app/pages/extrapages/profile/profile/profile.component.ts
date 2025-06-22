import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder } from '@angular/forms';

import { TokenStorageService } from '../../../../core/services/token-storage.service';


import { projectListModel, documentModel } from './profile.model';
import { document, projectList } from 'src/app/core/data';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

/**
 * Profile Component
 */
export class ProfileComponent {

  projectList!: projectListModel[];
  document!: documentModel[];
  userData: any;
  allprojectList: any;


  constructor(private formBuilder: UntypedFormBuilder, private modalService: NgbModal, private TokenStorageService: TokenStorageService, public service: PaginationService) {

  }

  ngOnInit(): void {
    this.userData = this.TokenStorageService.getUser();
    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.document = document;
    this.projectList = projectList;
    this.allprojectList = projectList;
  }

  /**
   * Swiper setting
   */
  config = {
    slidesPerView: 3,
    initialSlide: 0,
    spaceBetween: 25,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  };

  // Pagination
  changePage() {
    this.projectList = this.service.changePage(this.allprojectList)
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
    this.document.slice(id, 1)
    this.modalService.dismissAll()
  }

}
