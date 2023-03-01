import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { GestionpfeService } from '../gestionpfe.service';
import {Pfe} from '../Pfe'
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

types:number[] = []
  pfes:Pfe[] = []
dev:any;
  reseau:any;
  cloud:any;
  iot:any;
  pfestype:any=[]
  searchKey:string ="";

  constructor(private serv:GestionpfeService) {
    }


  ngOnInit(): void {
    this.cleartypes();
   this.getAllPfe()

  }

  cleartypes(){
    this.types[0]=0;
    this.types[1]=0;
    this.types[2]=0;
    this.types[3]=0;
    this.types[4]=0;
  }
  getAllPfe(){
    this.serv.getAllPfes().subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;this.cleartypes();
          for (let i = 0; i < this.pfes.length; i++) {
            console.log(this.pfes[i].type)
            this.types[4]++;
            if(this.pfes[i].type === "Developpement"){
              this.types[0]++;
            }
            if(this.pfes[i].type === "Réseau"){
              this.types[1]++;
            }
            if(this.pfes[i].type ===  "Telecom"){
              this.types[2]++;
            }
            if(this.pfes[i].type === "Embarqués et IoT"){
              this.types[3]++;
            }

          }{

          }


          },
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
    this.serv.getPfeByType(type).subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;},
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }
    )
  }

  /*getPfeByTitle(title: string) {
    this.serv.getPfeByTitle(title).subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;},
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }

    )
  }
}*/

getPfeByTitle(title: string) {
  const result: Pfe[] = [];
  console.log("start search ")
  for (const p of this.pfes) {
    console.log(p.title)
    if (p.title.toLowerCase().indexOf(title) !== -1) {
      result.push(p);
    }
  }
  this.pfes = result;
  console.log("end search ")


  //await timer(1000).pipe(take(1)).toPromise();
}


}
