import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvoiceRequest } from '@model/default/invoice';
import { Link, LinkFilter, LinkGroupedByAddress, SelectLink } from '@model/default/link';
import { LinkService } from 'app/pages/registration/link/link.service';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferencePipe } from 'app/@pipe';
import { format } from 'date-fns';
import { DATE_TIME_FORMAT } from 'app/@shared/fixture';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-invoice-select',
  styleUrls: ['./invoice-select.component.scss'],
  templateUrl: './invoice-select.component.html',
  providers:[
    ReferencePipe
  ]
})
export class InvoiceSelectComponent implements OnInit {

  @Input()
  public reference: string;

  @Output()
  public back = new EventEmitter();

  private links: Link[] = [];

  formattedReference: string;
  filter: LinkFilter = new LinkFilter() ;
  groups: LinkGroupedByAddress[] = [];
  total: number = 0;
  totalHydrometer: number = 0;
  totalCategory: number = 0;
  selectedTotal: number = 0;
  selectedAll: boolean = true;
  dueDate: null;
  warning: boolean = false;

  constructor(
    public service: LinkService,
    public invoiceService: InvoiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private referencePipe: ReferencePipe,
    public toastrService: NbToastrService,
    ) {
  }

  ngOnInit(): void {
    this.start()
    this.formattedReference= this.referencePipe.transform(this.reference)
  }

  start(){
    this.groups = [];
    this.service.listLinkWithoutInvoice(this.reference).subscribe(links => {
      {
        links.forEach(l=>{
          this.totalCategory += l.group.value
          if(l.place.hasHydrometer){
             this.service.getHydrometerByLinkAndReference(l.id, this.reference).subscribe(
              h => {
                l.hydrometer = h
                this.total += l.group.value + (h?.costValue || 0)
                this.totalHydrometer += (h?.costValue || 0)

              }
            )
          } else{
            this.total+= l.group.value;
          }
          this.links.push(l)
        })
      }

      this.sumSelectedValues()
    })

  }

  clear(){
    this.reference = null
    this.back.emit()
  }

  private sumSelectedValues(){
    this.links
      .sort((a, b) => a.place.address.name > b.place.address.name ? 1 : -1)
      .filter((link, indice, array) => array.findIndex(t => t.place.address.name === link.place.address.name) === indice)
      .forEach(i =>{
        this.groups.push({
          address: i.place.address,
          selected: true,
          links: this.links
            .filter(link => link.place.address.id == i.place.address.id)
            .sort((a, b) => a.place.address.name > b.place.address.name ? 1 : -1)
            .map(item => ({
              link: item,
              selected: true,
              hydrometerValue: (item.hydrometer?.costValue || 0),
              categoryValue: item.group.value,
              value: item.group.value +  (item.hydrometer?.costValue || 0)
            }))
        })
      })

      this.updateIndex();
  }

  updateIndex(){
    const filteredValues: SelectLink[] =
      this.groups
        .reduce((result, current) => result.concat(current.links) , [])
        .filter((item:SelectLink) => item.selected)

    const arrayWithAllVaues: number[] = filteredValues.map((item:SelectLink) => item.value)
    const sumValues: number = arrayWithAllVaues.reduce((result, current) => result + current, 0)

    this.selectedTotal = sumValues
  }

  selectedAddress(value: boolean, group: LinkGroupedByAddress){
    group.links.forEach(links => links.selected = value)
    this.updateIndex()
  }

  selectAll(value: boolean){
    this.groups.forEach(g => {
      g.selected = value;
      g.links.forEach(l => l.selected = value)
      }
    )
    this.updateIndex();
  }

   save(){

    if(!this.dueDate){
      this.toastrService.warning(`Aviso`, `É preciso escolher a data de vencimento da fatura antes de continuar`);
      this.warning = true;
      return;
    }

    const invoices: InvoiceRequest []=[];
    this.groups
      .reduce( (result, current) => result.concat(current.links) , [])
      .filter((item:SelectLink) => item.selected)
      .map((l:SelectLink) => l.link)
      .forEach((link: Link) =>
        invoices.push({
          link: {id: link.id},
          emission: format(new Date(), DATE_TIME_FORMAT),
          dueDate: format(this.dueDate, DATE_TIME_FORMAT) ,
          reference: this.reference,
          invoiceDetails: [
            {
              reason: 'CATEGORY',
              value: link.group.value,
              isPayed: false,
              dataPayed: null
            }
          ]
        })
    )

    this.invoiceService.saveAll(invoices).subscribe(
      ()=>
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
    )
  }

}
