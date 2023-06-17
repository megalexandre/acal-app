import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Group, GroupPageFilter } from '@model/default/group';
import { Page } from '@model/page';
import { GroupService } from 'app/pages/registration/group/group.service';

@Component({
  selector: 'ngx-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent implements OnInit{

  @Output()
  public selectGroup = new EventEmitter()
  public group: Group = null;

  public filter: GroupPageFilter = new GroupPageFilter();

  public page: Page<Group>;
  public loading: boolean =  false;

  constructor(
    private service: GroupService,
    ){
  }

  ngOnInit(): void {
    this.search();
  }

  public emitGroup(group: Group){
    this.group = group
    this.selectGroup.emit(group)
  }

  public clearGroup(){
    this.group = null
    this.selectGroup.emit(null)
  }


  public order(field: string){
    this.filter.sortedField = field
    if(this. filter.direction ===  'ASC') {
      this. filter.direction = 'DESC';
    } else {
      this. filter.direction = 'ASC';
    }

    this.search();
  }

  public paginate(page: number){
    this.filter.page = page;
    this.search('paginate');
  }

  public search(action: String = 'serch') {
    if(action ==='serch'){
      this.filter.page = 0;
    }

    this.loading = true;
    this.service.getPage(this.filter).subscribe(
      page => {
        this.page = page;
        this.loading = false;
      },
    );
  }

}


