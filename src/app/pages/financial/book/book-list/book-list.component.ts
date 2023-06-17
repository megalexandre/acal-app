import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '@core/list.component';
import { BookPage, BookPageFilter } from '@model/default/book';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { format } from 'date-fns';
import { BookService } from '../book.service';

@Component({
  selector: 'ngx-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent extends ListComponent implements OnInit {

  public filter: BookPageFilter = new BookPageFilter();
  public page: Page<BookPage>;

  constructor(
    public service: BookService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
    super(service, activatedRoute, router, data);
  }

  ngOnInit(): void {
    super.init();
  }

  public prepareDataForSearch() {
    const formatedDate = this.formatedDate()
    return {...this.filter, formatedDate}
  }

  public formatedDate(){
    if(this.filter.createdAt){
      return format(new Date(this.filter.createdAt), "dd-MM-yyyy")
    } else {
      return null
    }

  }


}
