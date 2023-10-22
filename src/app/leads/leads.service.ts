import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentUrl } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs'
import { Leads } from '../interfaces/leads';
@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  $LEADS=new BehaviorSubject<Leads[]>([])
  constructor(public httpClient: HttpClient) { }
  getLeads(){
    return this.httpClient.get<Leads[]>(`${environmentUrl}/api/leads`)
  }
  getpotentialduplicates(id:string){
    return this.httpClient.get<[]>(`${environmentUrl}/api/leads/${id}/potential-duplicates`)
  }
  putpotentialduplicates(id:string,data:{}){
    return this.httpClient.put(`${environmentUrl}/api/leads/${id}`,data)
  }
}
