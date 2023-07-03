export interface User {
  id: string,
  name: string,
  roles: string[],
}

export interface UserPage {
  id: string,
  name: string,
  roles: string[]
}

export class UserPageFilter {
  name?: string =  null;

  reset(){
    this.name = '';
  }
}

export interface UserFilter {
  name: string,
}


