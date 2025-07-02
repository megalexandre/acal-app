import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanieslistComponent } from './companieslist.component';

describe('CompanieslistComponent', () => {
  let component: CompanieslistComponent;
  let fixture: ComponentFixture<CompanieslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanieslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
