export class Employee{
  id: number;
  title: string;
  type: string ;

  constructor(id: number, title: string, type:string){
    this.id = id;
    this.title=title;
    this.type= type ;
  }

  constructor(title:string,type:string) {
    this.title=title;
    this.type=type;
  }
}
