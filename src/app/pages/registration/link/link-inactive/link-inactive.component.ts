import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Link } from '@model/default/link';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { LinkService } from '../link.service';

@Component({
  selector: 'ngx-link-inactive',
  templateUrl: './link-inactive.component.html',
  styleUrls: ['./link-inactive.component.scss']
})
export class LinkInactiveComponent implements OnInit {

  public link: Link;
  public loaded = false

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private service: LinkService,
    private data: DataService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    if(!this.data.id){
      this.back()
    }
    this.service.getById(this.data.id).subscribe(
      link => {
        this.link = link
        this.loaded = true;
      }
    )
  }

  public inactive(){
    this.service.inactivate(this.data.id).subscribe(
      ()=>{
        this.back()
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
    )
  }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

}
