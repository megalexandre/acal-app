/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {


  @Input()
  public message: string;

  @Input()
  public show: boolean;

  constructor() { }

}
