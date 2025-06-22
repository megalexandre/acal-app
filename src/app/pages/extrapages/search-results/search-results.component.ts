import { Component, OnInit, ViewChild } from '@angular/core';

// Light Box
import { Lightbox } from 'ngx-lightbox';

import { swiperModel, GalleryModel, NewsModel, VideoModel } from './search-results.model';
import { gallery, news, swiper, video } from 'src/app/core/data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

/**
 * SearchResults Component
 */
export class SearchResultsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  swiper!: swiperModel[];
  gallery!: GalleryModel[];
  news!: NewsModel[];
  video!: VideoModel[];

  images: { src: string; thumb: string; caption: string }[] = [];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../../assets/images/small/img-' + i + '-thumb.jpg';
      const item = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this.images.push(item);
    }
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Search Results', active: true }
    ];

    // Chat Data Get Function
    this._fetchData();

    setTimeout(() => {
      this.slideConfig = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        arrows: false
      };
    }, 0);
  }

  // Chat Data Fetch
  private _fetchData() {
    this.swiper = swiper;
    this.gallery = gallery;
    this.news = news;
    this.video = video;
  }


  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index, {});
  }


  /**
   * Swiper setting
   */
  slideConfig = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false
  };


}
