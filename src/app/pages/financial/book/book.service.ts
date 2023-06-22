import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "@env/environment"
import { Book, BookFilter, BookPage, BookPageFilter } from "@model/default/_index"
import { DefaultService } from "app/@shared/default.service"

@Injectable()
export class BookService extends DefaultService<Book, BookFilter, BookPage, BookPageFilter> {

  public get env(): string {
    return `${environment.book}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  public getReportInvoiceLot(filter: any){
    return this.http.post<any>(`${this.env}/report`, filter ,{ 'responseType': 'arraybuffer' as 'json' })
  }

}
