import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewComponent } from './grid-view.component';

describe('GridViewComponent', () => {
  let component: GridViewComponent;
  let fixture: ComponentFixture<GridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
