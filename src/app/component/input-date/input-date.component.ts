import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isValid } from 'date-fns';

@Component({
  selector: 'ngx-input-date',
  templateUrl: './input-date.component.html',
})
export class InputDateComponent {

  readonly completedSize = 10;

  @Input()
  public status: string = 'basic';

  @Input()
  public model?: string = null;

  @Output()
  public modelChange?: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public setDate: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public setBlur: EventEmitter<boolean> = new EventEmitter<boolean>()

  emiteDate() {
    if(this.isValidDate()){
      this.setDate.emit(this.model.split('/').join('-'))
      this.modelChange.emit(this.model.split('/').join('-'))
    }
    else {
      this.setDate.emit(null)
      this.modelChange.emit(null)
      this.model = null
    }
  }

  onBlur(){
    this.emiteDate()
    this.setBlur.emit(true)
  }

  isValidDate(): boolean {
    if(this.model === null ){
      this.status = "basic"
    }

    if(this.model && this.model.length === this.completedSize){
      const splited = this.model.split("/")
      const day = Number(splited[0])
      const month = Number(splited[1])
      const year = Number(splited[2])

      const valid = isValid(new Date(year, month, day))
      if(valid){
        this.status = "basic"
      } else {
        this.status = "danger"
      }

      return isValid(new Date(year, month, day))
    }

    if(this.model !== null ){
      this.status = "danger"
    }

    return false
  }

}
