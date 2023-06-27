import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/@shared/data.service';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public data: DataService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]],
    })
  }

  submit(){
    if(this.form.valid){
      this.data.setId = this.form.get("id").value
      this.router.navigate(['../../invoice/view'],{relativeTo: this.activatedRoute})
    }
  }

}
