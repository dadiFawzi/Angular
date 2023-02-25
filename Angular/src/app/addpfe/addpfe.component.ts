import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionpfeService } from '../gestionpfe.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-addpfe',
  templateUrl: './addpfe.component.html',
  styleUrls: ['./addpfe.component.css']
})
export class AddpfeComponent implements OnInit {

  n:string="" ;
  pfes:any
  total:number=0
  pfestype:any=[]

  title:string='';
  type:string='';
pfe:any;
types:any=["Developpement","Réseau","Telecom","Embarqués et IoT"]
  constructor(private serv:GestionpfeService, private route:Router) { }

  ngOnInit(): void {
  }

  addPfe(title: string, type: string){

    console.log("pfe Name is:" +
      title+
      " pfe type is:"
      + type
    );
this.pfe = {title:title,type:type.slice(3)}

    this.serv.addpfe(this.pfe).subscribe(
      {
        next: (data : any) => { this.route.navigate(["List"])},
        error: (err : any) => { },
        complete: () => { }
      }
    )

  }

  getPfeByType(type:string){
    this.serv.getPfeByType(type).subscribe(
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


}
