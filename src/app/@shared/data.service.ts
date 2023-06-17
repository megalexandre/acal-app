import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _id: string;

  set setId(id: string) {
     this._id = id;
  }

  get id(): string {
      return this._id;
  }

}
