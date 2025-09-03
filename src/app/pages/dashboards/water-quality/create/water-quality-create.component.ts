import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithSent } from '../../address/address.model';
import { WaterQualityService } from '../water-quality.service';
import { WaterParam } from '../water-quality.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-water-quality-create',
  templateUrl: './water-quality-create.component.html',
})
export class WaterQualityCreateComponent implements OnInit, ModalWithSent {
 
  @Output() 
  public sent = new EventEmitter<void>();

  public form!: FormGroup;
  public submitted = false;
  public waterParams: WaterParam[] =[];
  public loaded = false;

  constructor(
    private fb: FormBuilder,
    private service: WaterQualityService,
    public activeModal: NgbActiveModal,
    private t: ToastrService,
  ) {}

  ngOnInit(): void {

    this.service.getWaterParams().subscribe({
      next: (waterParam) => {
        this.waterParams = waterParam;
        this.initForm();
      }
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      reference: ['', [
        Validators.required, 
      ]],

      analysis: this.fb.array(
        this.waterParams.map(param => this.createAnalysisGroup(param))
      )

    });
  }

  createAnalysisGroup(param: WaterParam): FormGroup {
    return this.fb.group({
      name: [param.name, Validators.required],
      analyzed: [6, Validators.required],
      required: [6, Validators.required],
      conformity: [6, Validators.required]
    });
  }


  async onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.service.create(this.form.value).subscribe({
        next: () => {
          this.sent.emit();  
          this.close();
        },
        error: (err) => {
          this.t.error(err)
        },
      });
    }
  }

  markAllAsTouched(): void {
    this.form.markAllAsTouched();
    this.analysisArray.controls.forEach(group => {
      (group as FormGroup).markAllAsTouched();
    });
  }

 isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return control?.invalid && (control?.dirty || control?.touched) || false;
  }

  isAnalysisInvalid(index: number, field: string): boolean {
    const control = this.analysisArray.at(index).get(field);
    return (this.submitted && control?.invalid) || false;
  }

  isAnalysisValid(index: number, field: string): boolean {
    const control = this.analysisArray.at(index).get(field);
    return (this.submitted && control?.valid) || false
    
  }

  get analysis(): FormArray {
    return this.form.get('analysis') as FormArray;
  }

  get reference(): FormControl {
    return this.form.get('reference') as FormControl;
  }

  get analysisArray(): FormArray {
    return this.form.get('analysis') as FormArray;
  }

  close() {
    this.activeModal.close();
  }

  isValid(element: string): boolean {
    return (this.getControl(element)?.valid && this.submitted) || false;
  }

  isInvalid(element: string): boolean {
    return (this.getControl(element)?.invalid && this.submitted) || false;
  }

  getControl(field: string): AbstractControl | null {
    return this.form.get(field);
  }
}
