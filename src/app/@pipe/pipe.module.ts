import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe, IdentificationPipe, ParamPipe, ReferencePipe, DateTimePipe ,ReasonPipe, TypePipe } from '.';

const PIPES = [
  IdentificationPipe,
  CategoryPipe,
  ParamPipe,
  ReferencePipe,
  DateTimePipe,
  ReasonPipe,
  TypePipe,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PIPES,
  ],
  exports:[
    PIPES
  ]
})
export class PipeModule { }
