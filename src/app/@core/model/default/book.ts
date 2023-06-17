import { DefaultFilter, DefaultFilterPage, DefaultModel, DefaultModelPage } from "./_index";

export interface Book extends DefaultModel {
  id: string,
  value: number,
  createdBy: string,
  createdAt: string,
  type: Type,
  reason: string,
}

export interface Type {
  name: 'IN'|'OUT',
}

export interface BookPage extends DefaultModelPage{
  id: string,
  value: number,
  createdBy: string,
  createdAt: string,
  type: Type,
  reason: string,
}

export interface BookFilter extends DefaultFilter {
  value?: number,
  createdBy?: string,
  createdAt?: string,
  type?: string,
  reason?: string,
  createdAtStarted?: string,
  createdAtFinish?: string,
}

export class BookPageFilter extends DefaultFilterPage {
  value?: number = null;
  createdBy?: string = null;
  createdAt?: string = null;
  type?: string = null;
  reason?: string = null;
  createdAtStarted?: string = null;
  createdAtFinish?: string = null;

  reset(){
    super.reset();
    this.value = null;
    this.createdAt = null;
    this.createdBy = null
    this.type = null;
    this.reason = null;
    this.createdAtStarted = null;
    this.createdAtFinish = null;
  }

}
