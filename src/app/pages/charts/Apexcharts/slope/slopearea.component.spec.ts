import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlopeareaComponent } from './slopearea.component';

describe('SlopeareaComponent', () => {
  let component: SlopeareaComponent;
  let fixture: ComponentFixture<SlopeareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlopeareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlopeareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
