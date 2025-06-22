import { Component, OnInit } from '@angular/core';

import { cryptoICOList } from 'src/app/core/data';
import { ICOModel } from 'src/app/store/Crypto/crypto_model';

@Component({
  selector: 'app-ico',
  templateUrl: './ico.component.html',
  styleUrls: ['./ico.component.scss']
})

/**
 * Ico Component
 */
export class IcoComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  chatMessagesData!: ICOModel[];
  chatMessageDatas: any;
  term: any;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Crypto' },
      { label: 'ICO List', active: true }
    ];

    // Chat Data Get Function
    this._fetchData();
  }

  // Chat Data Fetch
  private _fetchData() {
    this.chatMessagesData = cryptoICOList;
    this.chatMessageDatas = Object.assign([], this.chatMessagesData);
  }

  // Filtering
  isstatus?: any
  SearchData() {
    var status = (document.getElementById("choices-single-default2") as HTMLInputElement).value;
    var rating = (document.getElementById("choices-single-default") as HTMLInputElement).value;
    var date = (document.getElementById("isDate") as HTMLInputElement).value;

    if (date != '') {
      this.chatMessageDatas = this.chatMessagesData.filter((ico: any) => {
        return ico.date === date;
      });
    } else if (status != '') {
      this.chatMessageDatas = this.chatMessagesData.filter((ico: any) => {
        return ico.status === status;
      });
    } else if (rating != '') {
      this.chatMessageDatas = this.chatMessagesData.filter((ico: any) => {
        return ico.rating >= rating;
      });
    }
    else {
      this.chatMessageDatas = this.chatMessagesData;
    }
  }

}
