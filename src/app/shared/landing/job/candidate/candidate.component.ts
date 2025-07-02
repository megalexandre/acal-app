import { Component, OnInit } from '@angular/core';

import { candidates } from './data';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidates: any;

  constructor() { }

  ngOnInit(): void {
    // Fetch Data
    this.candidates = candidates
  }

  /**
  * Swiper Responsive setting
  */
  public Responsive = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    dots: true,
    arrows: false
  };

}
