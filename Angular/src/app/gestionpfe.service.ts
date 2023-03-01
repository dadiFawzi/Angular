import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionpfeService {
  search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }

  getAllPfes(): Observable<any>{

      return this.http.get("http://127.0.0.1:8080/pfe-projects")

  }
  getPfeByType(type:string){
    return this.http.get("http://127.0.0.1:8080/pfe-projects/type/"+type)
  }

  getPfeByTitle(title : string){
    return this.http.get("http://127.0.0.1:8080/pfe-projects/search/"+title)
  }

  addpfe(pfe : any){
    return this.http.post("http://127.0.0.1:8080/pfe-projects/addpfe",pfe)
  }

  deletepfe(id : number){
    return this.http.delete("http://127.0.0.1:8080/pfe-projects/deletepfe/"+id)
  }
}
