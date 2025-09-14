import { Component, OnInit } from '@angular/core';
import { WaterMeterService } from './water-meter.service';
import { WaterMeter } from './water-meter.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-water-meter',
  templateUrl: './water-meter.component.html',
})
export class WaterMeterComponent implements OnInit{

  page: any;
  loading = false;

  constructor(
    private service: WaterMeterService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  create(): void {
    this.router.navigate(['create'], {relativeTo: this.route, state: {} });
  }

  trackById(index: number, item: WaterMeter): string {
    return item.id;
  }
  
  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.loading = false;

   this.service.paginate({}).subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });

  }

  onPageChange(page: number): void {
    setTimeout(() => {
      this.search();
    });
  }

}
