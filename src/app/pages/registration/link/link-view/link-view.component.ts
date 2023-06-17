import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/@shared/data.service';
import { LinkService } from '../link.service';
import { Link } from '@model/default/link';

@Component({
  selector: 'ngx-link-view',
  templateUrl: './link-view.component.html',
  styleUrls: ['./link-view.component.scss']
})
export class LinkViewComponent implements OnInit{

  public link: Link;
  public loaded = false

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private service: LinkService,
    private data: DataService,
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

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

}
