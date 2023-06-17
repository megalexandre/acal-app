import { filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '@model/default/address';
import { AddressService } from 'app/pages/registration/address/address.service';

const OUTROS = 5
@Component({
  selector: 'ngx-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss']
})
export class SelectAddressComponent implements OnInit {

  @Input()
  public status: string = 'basic';

  @Input()
  public showTitle: Boolean = true

  @Input()
  public addSelectOption: Boolean = false

  @Input()
  public address: Address;

  @Output()
  public addressChange = new EventEmitter()

  public groups: {name:string; values: Address[] }[] = []

  public adresses: Address[]

  public loaded = false;

  private defaulValues = ['Avenida','Rua','Fazenda', 'Travessa','Praça', 'Outros']

  constructor(private service: AddressService) {
    this.defaulValues.forEach(name=>{
      this.groups.push({name: name, values:[]})
    })
  }

  ngOnInit(): void {

    this.service.getAll().subscribe(
      (adresses: Address[])=>{
        this.createGroups(adresses)
        this.loaded = true;
      }
    );

  }

  createGroups(adresses: Address[]){
    this.groups.forEach(g =>{
      g.values = adresses.filter(a => a.name.toLowerCase().startsWith(g.name.toLowerCase()))

    })

    this.groups[OUTROS].values = adresses.filter(ad =>
      !this.defaulValues.map(value=> value.toLocaleLowerCase()).includes(ad.name.substring(0, ad.name.indexOf(' ')) .toLocaleLowerCase())
    )

    this.groups.forEach(group =>{
      group.values.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })

    this.groups = this.groups.filter((group)=> group.values.length >0 )
  }

  selectedChange(address: Address){
    this.addressChange.emit(address)
  }

  compareById(v1: Address, v2: Address): boolean {
    return v1?.id === v2?.id;
  }
}
