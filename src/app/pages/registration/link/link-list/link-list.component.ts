import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '@core/list.component';
import { Category } from '@model/default/group';
import { LinkPage, LinkPageFilter } from '@model/default/link';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { LinkService } from '../link.service';

@Component({
  selector: 'ngx-link-list',
  templateUrl: './link-list.component.html',
})
export class LinkListComponent extends ListComponent implements OnInit {

  public filter: LinkPageFilter = new LinkPageFilter();

  public page: Page<LinkPage>;
  public loading: boolean =  false;

  constructor(
    public service: LinkService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
    super(
      service, activatedRoute, router, data
    )
  }

  ngOnInit(): void {
    super.init()
  }

  public view(id: string){
    this.data.setId = id
    this.router.navigate(['../view'],{relativeTo: this.activatedRoute})
  }

  public inactive(id: string){
    this.data.setId = id
    this.router.navigate(['../inactive'],{relativeTo: this.activatedRoute})
  }

  download(){
    this.service.getReport(this.filter).subscribe((response)=>{
      let file = new Blob([response], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    })
  }

  selectCategory(category: Category){
    this.filter.group.category = category;
    this.search();
  }

  public togglePersonType(){
    if(this.filter.personType.name === 'LEGAL'){
      this.filter.personType.name = 'PERSON'
    } else {
      this.filter.personType.name = 'LEGAL'
    }
  }

}
