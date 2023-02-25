import { Component } from '@angular/core';
import {GestionpfeService} from "../gestionpfe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


pfes:any
  query:any

  pfestype:any=[]
  searchKey:string ="";
   title: string="";

  constructor(private serv:GestionpfeService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.query = this.route.snapshot.queryParamMap.get('l2');
    console.log("hello world "+this.query);
  }


  getPfeByTitle(t:string){
    this.title=t;
    this.serv.getPfeByTitle(this.title).subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;},
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }
    )
  }

  getAllPfe(){
    this.serv.getAllPfes().subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;},
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }
    )
  }


  deletePfe(id:number){
    this.serv.deletepfe(id).subscribe(
      {
        next: (data : any) => {this.getAllPfe()},
        error: (err : any) => { },
        complete: () => { }
      })
  }
  getPfeByType(type:string){
    this.pfestype = this.pfes
      .filter((data:any)=>{
          if(data.type == type || type==''){
            return data;
          }
        }
      )
  }

}
