import { Component } from '@angular/core';
import { GestionpfeService } from './gestionpfe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  t:string="";
  title = 'GestionPfe';
  pfes :any
  pfestype:any=[]
  searchTerm !: string;

  constructor(private serv:GestionpfeService){

  }

    getAllPfe(value: string){

    this.serv.getAllPfes().subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;},
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }
    )
  }
  getPfeByTitle(title:string){
    this.serv.getPfeByTitle(title).subscribe(
      {
        next: (data : any) => {this.pfes=data;this.pfestype=data;},
        error: (err : any) => { console.log(err)},
        complete: () => { }
      }

    )

  }


}
