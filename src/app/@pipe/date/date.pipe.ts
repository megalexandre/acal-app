import { Pipe, PipeTransform } from '@angular/core';
import { DATE_FORMAT } from 'app/@shared/fixture';
import { isValid, parse, format } from 'date-fns'

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: string, output: string = DATE_FORMAT): string {

    const replacedValue = value.replace(":", "-").replace(":", "-")

    const day = Number(replacedValue[0])
    const month =Number(replacedValue[1])
    const year = Number(replacedValue[2])

    const date = new Date(year, month, day, 0, 0, 0)

    if (isValid(date)) {
      return format(date, output)
     }

    return value;
  }

}

