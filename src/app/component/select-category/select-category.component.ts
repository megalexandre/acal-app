import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Category } from '@model/default/group';

@Component({
  moduleId: module.id.toString(),
  selector: 'ngx-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => SelectCategoryComponent)
  }]
})
export class SelectCategoryComponent implements ControlValueAccessor {

  onChange = (value: Category) => {};

  @Input()
  public category: Category;

  @Input()
  public status: string = 'basic';

  @Output()
  public categoryChange = new EventEmitter()

  constructor() { }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  selectedChange(){
    this.categoryChange.emit(this.category)
  }


}
