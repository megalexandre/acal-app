import { Component } from '@angular/core';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
// Range Slider
import { Options } from 'ngx-slider-v2';


// Products Services
import { restApiService } from "../../../core/services/rest-api.service";
import { GlobalComponent } from '../../../global-component';
import { Router } from '@angular/router';
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { deleteProduct, fetchProductListData } from 'src/app/store/Ecommerce/ecommerce_action';
import { selectDataLoading, selectProductData } from 'src/app/store/Ecommerce/ecommerce_selector';
import { cloneDeep } from 'lodash';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

/**
 * Products Components
 */
export class ProductsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  url = GlobalComponent.API_URL;
  products!: any;
  user = [];
  Brand: any = [];
  Rating: any = [];
  discountRates: number[] = [];
  contactsForm!: UntypedFormGroup;
  total: any;
  totalbrand: any;
  totalrate: any;
  totaldiscount: any;
  allproduct: any;

  allproducts: any;
  activeindex = '1';
  allpublish: any;
  grocery: any = 0;
  fashion: any = 0;
  watches: any = 0;
  electronics: any = 0;
  furniture: any = 0;
  accessories: any = 0;
  appliance: any = 0;
  kids: any = 0;
  totalpublish: any = 0;

  // Table data
  // allproductList: any;
  searchTerm: any;

  searchproducts: any;
  publishedproduct: any;
  ProductFilter: any;
  productRate: any;
  productPrice: any;
  searchResults: any;


  constructor(private modalService: NgbModal,
    private router: Router,
    public service: PaginationService,
    private formBuilder: UntypedFormBuilder,
    private store: Store<{ data: RootReducerState }>,
    public restApiService: restApiService) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Products', active: true }
    ];

    // Fetch Data
    this.store.dispatch(fetchProductListData());
    this.store.select(selectDataLoading).subscribe((data) => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none');
      }
    });

    this.store.select(selectProductData).subscribe((data) => {
      this.products = data;
      this.allproduct = cloneDeep(data);
      this.products = this.service.changePage(this.allproduct)
    });

    setTimeout(() => {
      for (var i = 0; i < this.allproducts?.length; i++) {
        if (this.allproducts[i].category == 'Kitchen Storage & Containers') {
          this.grocery += 1
        }
        if (this.allproducts[i].category == 'Clothes') {
          this.fashion += 1
        }
        if (this.allproducts[i].category == 'Watches') {
          this.watches += 1
        } if (this.allproducts[i].category == 'Electronics') {
          this.electronics += 1
        } if (this.allproducts[i].category == 'Furniture') {
          this.furniture += 1
        } if (this.allproducts[i].category == 'Bike Accessories') {
          this.accessories += 1
        }
        if (this.allproducts[i].category == 'Tableware & Dinnerware') {
          this.appliance += 1
        }
        if (this.allproducts[i].category == 'Bags, Wallets and Luggage') {
          this.kids += 1
        }
        if (this.allproducts[i].status == 'published') {
          this.totalpublish += 1
        }
      }
    }, 2000);

    /**
   * Form Validation
   */
    this.contactsForm = this.formBuilder.group({
      subItem: this.formBuilder.array([]),
    });
  }

  // Search Data
  performSearch(): void {
    this.searchResults = this.allproduct.filter((item: any) => {
      return (item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    // this.orderes = this.searchResults.slice(0, 10);
    this.products = this.service.changePage(this.searchResults)
  }

  changePage() {
    this.products = this.service.changePage(this.allproduct)
  }

  /**
* change navigation
*/
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      this.activeindex = '1'
    }
    if (changeEvent.nextId === 2) {
      this.activeindex = '2'
      this.products = this.allproduct.filter((product: any) => product.status == 'published');
    }
    if (changeEvent.nextId === 3) {
      this.activeindex = '3'
    }
  }

  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort(column: any) {
    this.products = this.service.onSort(column, this.products)
  }

  /**
  * Delete Model Open
  */
  deleteId: any;
  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(id: any) {
    if (id) {
      this.store.dispatch(deleteProduct({ id: this.deleteId.toString() }));
    } else {
      this.store.dispatch(deleteProduct({ id: this.checkedValGet.toString() }));
      (document.getElementById("selection-element") as HTMLElement).style.display = "none"
    }
    this.deleteId = ''
  }

  // Price Slider
  minValue = 0;
  maxValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  /**
   * Default Select2
   */
  multiDefaultOption = 'Watches';
  selectedAccount = 'This is a placeholder';
  Default = [
    { name: 'Watches' },
    { name: 'Headset' },
    { name: 'Sweatshirt' },
  ];

  // Check Box Checked Value Get
  checkedValGet: any[] = [];
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkboxes: any = document.getElementsByName('checkAll');
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    var checkBoxCount: any = document.getElementById('select-content') as HTMLElement;
    checkBoxCount.innerHTML = checkedVal.length;
    checkedVal.length > 0 ? (document.getElementById("selection-element") as HTMLElement).style.display = "block" : (document.getElementById("selection-element") as HTMLElement).style.display = "none";
  }
  /**
    * Brand Filter
    */
  changeBrand(e: any) {
    if (e.target.checked) {
      this.Brand.push(e.target.defaultValue)
    } else {
      for (var i = 0; i < this.Brand.length; i++) {
        if (this.Brand[i] === e.target.defaultValue) {
          this.Brand.splice(i, 1)
        }
      }
    }
    this.totalbrand = this.Brand.length
  }

  /**
  * Discount Filter
  */
  changeDiscount(e: any) {
    if (e.target.checked) {
      this.discountRates.push(e.target.defaultValue)

      this.products = this.allproduct.filter((product: any) => {
        return product.rating > e.target.defaultValue;
      });
    } else {
      for (var i = 0; i < this.discountRates.length; i++) {
        if (this.discountRates[i] === e.target.defaultValue) {
          this.discountRates.splice(i, 1)
        }
      }
    }
    this.totaldiscount = this.discountRates.length
  }


  /**
   * Rating Filter
   */
  changeRating(e: any, rate: any) {
    if (e.target.checked) {
      this.Rating.push(e.target.defaultValue)
      this.products = this.allproduct.filter((product: any) => product.rating >= rate);
    }
    else {
      for (var i = 0; i < this.Rating.length; i++) {
        if (this.Rating[i] === e.target.defaultValue) {
          this.Rating.splice(i, 1)
        }
      }
      this.productRate = rate;
    }
    this.totalrate = this.Rating.length
  }



  /**
   * Product Filtering  
   */
  changeProducts(e: any, name: any, category: any) {
    const iconItems = document.querySelectorAll('.filter-list');
    iconItems.forEach((item: any) => {
      var el = item.querySelectorAll('a')
      el.forEach((item: any) => {
        var element = item.querySelector('h5').innerHTML
        if (element == category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      })
    });
    this.products = this.allproduct.filter((product: any) => product.category == category);
  }


  /**
  * Search Product
  */
  search(value: string) {
    if (this.activeindex == '1') {
      if (value) {
        this.products = this.allproducts.filter((val: any) =>
          val.category.toLowerCase().includes(value)
        );
        this.total = this.products.length;
      } else {
        this.products = this.searchproducts
        this.total = this.allproducts.length;
      }
    } else if (this.activeindex == '2') {
      if (value) {
        this.publishedproduct = this.publishedproduct.filter((val: any) =>
          val.category.toLowerCase().includes(value)
        );
        this.total = this.publishedproduct.length;
      } else {
        this.publishedproduct = this.allpublish
        this.total = this.publishedproduct.length;
      }
    }

  }

  /**
  * Range Slider Wise Data Filter
  */
  valueChange(value: number, boundary: boolean): void {
    if (value > 0 && value < 1000) {
      if (this.activeindex == '1') {
        if (boundary) {
          this.minValue = value;
        } else {
          this.maxValue = value;
        }
      } else if (this.activeindex == '2') {
        if (boundary) {
          this.minValue = value;
        } else {
          this.maxValue = value;
        }
      }
    }
  }

  clearall(ev: any) {
    this.minValue = 0;
    this.maxValue = 1000;
    var checkboxes: any = document.getElementsByName('checkAll');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false
    }
    // this.service.searchTerm = ''
    this.totalbrand = 0;
    this.totaldiscount = 0;
    this.totalrate = 0;
    this.Brand = []
    this.Rating = []
    this.discountRates = []
    const iconItems = document.querySelectorAll('.filter-list');
    iconItems.forEach((item: any) => {
      var el = item.querySelectorAll('a')
      el.forEach((item: any) => {
        item.classList.remove("active");
      })
    });
    this.searchTerm = '';
    this.ProductFilter = '';
    this.productRate = 0;
    this.productPrice = 0;
    this.products = this.allproduct
  }

  godetail(id: any) {
    this.router.navigate(['/ecommerce/product-detail'])
  }

  gopublishdetail(id: any) {
    this.router.navigate(['/ecommerce/product-detail/'])
  }

}
