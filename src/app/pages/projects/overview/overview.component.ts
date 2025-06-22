import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { projectDocument, ProjectTeam } from 'src/app/core/data';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})

/**
 * Overview Component
 */
export class OverviewComponent {

  projectListWidgets!: any;
  teamOverviewList: any;
  submitted = false;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    /**
     * Fetches the data
     */
    this.projectListWidgets = projectDocument;
    this.teamOverviewList = ProjectTeam;
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
  * Active Toggle navbar
  */
  activeMenu(id: any) {
    document.querySelector('.star_' + id)?.classList.toggle('active');
  }


}
