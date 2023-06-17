import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-edit-button',
  templateUrl: './edit-button.component.html',
})
export class EditButtonComponent {

  @Input()
  public disabled: boolean = false;

}
