import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBlogComponent } from './dashboard-blog.component';

describe('DashboardBlogComponent', () => {
  let component: DashboardBlogComponent;
  let fixture: ComponentFixture<DashboardBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
