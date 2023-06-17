import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookFilter, BookPageFilter } from '@model/default/book';

@Component({
  selector: 'ngx-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.scss']
})
export class BookFilterComponent {

  @Input()
  filter: BookPageFilter

  @Output()
  search = new EventEmitter()

  active?: boolean;

  constructor() { }

  clear(){
    this.filter.reset();
    this.startSearch()
  }

  startSearch(){
    this.search.emit()
  }
}
