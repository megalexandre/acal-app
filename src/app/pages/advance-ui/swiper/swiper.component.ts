import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})

/**
 * Swiper Component
 */
export class SwipersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  @ViewChild('slickCarousel') slickCarousel!: SlickCarouselComponent;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Advance UI' },
      { label: 'Swiper Slider', active: true }
    ];
  }

  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  Navigation = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  };

  Pagination = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  PaginationFraction = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false,
   
    customPaging: (slider: any, index: number) => {
      // Customize the pagination here
      return `<button>${index + 1}</button>`;
    }
  }

    verticalConfig = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      vertical: true // Enable vertical sliding
    }

  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    arrows: false
  };

  fadeConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false
  }

  coverflowConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px', // Adjust as needed for spacing between slides
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  Responsive = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    dots: true,
    arrows: false
  };

  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scroll down (next slide)
      this.slickCarousel.slickNext();
    } else if (delta < 0) {
      // Scroll up (previous slide)
      this.slickCarousel.slickPrev();
    }
  }

}
