import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { Leads } from '../interfaces/leads';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
leads:Leads[]=[]
  constructor(public LeadsService:LeadsService) {
  this.LeadsService.getLeads().subscribe((res:Leads[])=>{
    this.leads=res
    this.LeadsService.$LEADS.next(res)
  })
  }

  ngOnInit(): void {}
  getpotentialduplicates(id:string){
    this.LeadsService.getpotentialduplicates(id).subscribe(res=>{
      console.log(res);

    })
  }
}
