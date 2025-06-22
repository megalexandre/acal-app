import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBlogOverviewComponent } from './pages-blog-overview.component';

describe('PagesBlogOverviewComponent', () => {
  let component: PagesBlogOverviewComponent;
  let fixture: ComponentFixture<PagesBlogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesBlogOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesBlogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
