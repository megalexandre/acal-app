import { ActivatedRoute, Router } from "@angular/router";
import { Page } from "@model/page";
import { DataService } from "app/@shared/data.service";
import { DefaultService } from "app/@shared/default.service";

export type Action = {
  name: 'search'|'add'|'edit'|'view'|'paginate'|'list'|'delete'
}

export abstract class ListComponent{

  public loading: boolean =  false;

  public page: Page<any>;
  public abstract filter: any

  constructor(
    public service: DefaultService<any, any, any, any>,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
  }

  init(): void {
    this.search();
  }

  public search(action: Action = {name: 'search'}) {
    if(action.name === 'search'){
      this.filter.page = 0;
    }

    this.loading = true;
    this.service.getPage(this.prepareDataForSearch()).subscribe(
      page => {
        this.page = page;
        this.loading = false;
      },
    );

  }

  public prepareDataForSearch(): any {
    return this.filter
  }

  public order(field: string){
    this.filter.sortedField = field

    this.toogleDirection();
    this.search();
  }

  private toogleDirection(){
    if(this.filter.direction ===  'ASC') {
      this.filter.direction = 'DESC';
    } else {
      this.filter.direction = 'ASC';
    }
  }

  public paginate(page: number){
    this.filter.page = page;
    this.search({name: 'paginate'});
  }


  reset(){
    this.filter.reset()
    this.search()
  }

  public add(){
    this.router.navigate(['../add'],{relativeTo: this.activatedRoute})
  }

  public edit(id: string){
    this.data.setId = id
    this.router.navigate(['../edit'],{relativeTo: this.activatedRoute})
  }

  public remove(id: string){
    this.data.setId = id
    this.router.navigate(['../delete'],{relativeTo: this.activatedRoute})
  }

  public view(id: string){
    this.data.setId = id
    this.router.navigate(['../view'],{relativeTo: this.activatedRoute})
  }

}
