import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { productModel, productList } from '../product.model';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})

/**
 * ProductDetail Component
 */
export class ProductDetailComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public productDetail!: productModel[];
  isImage;
  defaultSelect = 2;
  readonly = false;
  products: any;

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
  ) {
    this.products = this.route.snapshot.params;

    this.route.params.subscribe(
      (params) =>
        (this.productDetail = productList.filter(function (product) {
          return product.id == parseInt(params['id']);
        })),
    );
    this.isImage = this.productDetail[0].images[0];
  }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product Details', active: true }];
  }

  /**
   * Swiper setting
   */
  config = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  slidesConfig = {
    // Configuration options for the ngx-slick-carousel
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  slickChange(event: any) {
    const swiper = document.querySelectorAll('.swiperlist');
  }

  slidePreview(id: any, event: any) {
    const swiper = document.querySelectorAll('.swiperlist');
    swiper.forEach((el: any) => {
      el.classList.remove('swiper-slide-thumb-active');
    });
    event.target.closest('.swiperlist').classList.add('swiper-slide-thumb-active');
    this.slickModal.slickGoTo(id);
  }
}
