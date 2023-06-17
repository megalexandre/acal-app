import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkPageFilter } from '@model/default/_index';

@Component({
  selector: 'ngx-link-filter',
  templateUrl: './link-filter.component.html',
  styleUrls: ['./link-filter.component.scss']
})
export class LinkFilterComponent  {

  @Input()
  filter: LinkPageFilter

  @Output()
  search = new EventEmitter()

  active?: boolean;

  constructor() { }

  startSearch(){
    this.search.emit()
  }

}
