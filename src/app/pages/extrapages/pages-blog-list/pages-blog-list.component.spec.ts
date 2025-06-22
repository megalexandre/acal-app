import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBlogListComponent } from './pages-blog-list.component';

describe('PagesBlogListComponent', () => {
  let component: PagesBlogListComponent;
  let fixture: ComponentFixture<PagesBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesBlogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
