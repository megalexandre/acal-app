import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CustomerService } from '../customer.service';
import { CustomerAddComponent } from './customer-add.component';

describe('CustomerAddComponent', ()=>{
  let component: CustomerAddComponent;
  let fixture: ComponentFixture<CustomerAddComponent>;
  let formBuilder: FormBuilder;
  let service: CustomerService;
  let toastrService: NbToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerAddComponent],
      imports: [FormsModule, ReactiveFormsModule, Router],
      providers: [
        FormBuilder,
        CustomerService,
        NbToastrService,
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(CustomerAddComponent)
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    service = TestBed.inject(CustomerService);
    toastrService = TestBed.inject(NbToastrService);
    fixture.detectChanges()
  })

  it(`#${CustomerAddComponent.name} should be created`,()=>{
    expect(component).toBeTruthy()
  })

})



