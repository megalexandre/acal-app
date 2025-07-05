import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressSharedService } from '../address-shared.service';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressCreateComponent } from '../create/address-create.component';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
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
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.loading = true;

    this.addressService.getAddresses().subscribe({
      next: (addresses) => {
        this.addresses = addresses;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  openAddressModal() {
    const modal = this.modalService.open(AddressCreateComponent);
    const componentInstance = modal.componentInstance as AddressCreateComponent;

    componentInstance.onSave.subscribe(() => {
      this.search();
    });
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content);
  }

  edit(address: Address) {
    this.shared.setSelected(address);
    this.router.navigate(['edit'], { relativeTo: this.route.parent });
  }

  delete(address: Address) {
    this.shared.setSelected(address);
    this.router.navigate(['delete'], { relativeTo: this.route.parent });
  }
}
