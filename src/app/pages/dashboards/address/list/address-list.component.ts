import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressSharedService } from '../address-shared.service';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html'
})
export class AddressListComponent implements OnInit {
  addresses: Address[] = [];
  loading = true;

  constructor(
    private addressService: AddressService,
    private shared: AddressSharedService,
    private router: Router,
    private route: ActivatedRoute,
    public service: PaginationService,
  ) {}

  ngOnInit(): void {
  
    this.loading = true;
    
    this.addressService.getAddresses().subscribe(addresses => {
      this.addresses = addresses;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  edit(address: Address) {
    this.shared.setSelected(address);
    this.router.navigate(['edit'], { relativeTo: this.route.parent });
  }

  delete(address: Address){
    this.shared.setSelected(address);
    this.router.navigate(['delete'], { relativeTo: this.route.parent });
  }
}
