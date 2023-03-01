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
  typesn:number[] = []
  title:string='';
  type:string='';
pfe:any;
types:any=["Developpement","Réseau","Telecom","Embarqués et IoT"]
  constructor(private serv:GestionpfeService, private route:Router) { }

  ngOnInit(): void {
  this.cleartypes();
  this.getAllPfe();
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
this.getAllPfe();
  }


  getAllPfe(){
    this.serv.getAllPfes().subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;this.cleartypes();
          for (let i = 0; i < this.pfes.length; i++) {
            console.log(this.pfes[i].type)
            this.typesn[4]++;
            if(this.pfes[i].type === "Developpement"){
              this.typesn[0]++;
            }
            if(this.pfes[i].type === "Réseau"){
              this.typesn[1]++;
            }
            if(this.pfes[i].type ===  "Telecom"){
              this.typesn[2]++;
            }
            if(this.pfes[i].type === "Embarqués et IoT"){
              this.typesn[3]++;
            }

          }{

          }


        },
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }
    )
  }

  cleartypes(){
    this.typesn[0]=0;
    this.typesn[1]=0;
    this.typesn[2]=0;
    this.typesn[3]=0;
    this.typesn[4]=0;
  }


}
