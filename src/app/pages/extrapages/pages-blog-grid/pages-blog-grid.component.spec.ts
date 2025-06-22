import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBlogGridComponent } from './pages-blog-grid.component';

describe('PagesBlogGridComponent', () => {
  let component: PagesBlogGridComponent;
  let fixture: ComponentFixture<PagesBlogGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesBlogGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesBlogGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
