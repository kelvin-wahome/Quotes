export class Quote {
  public showDescription:boolean;
  constructor(public id:number, public name:string, public author:string, public username:string, public date:Date ){
    this.showDescription=false
  }
}
