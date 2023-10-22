import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadsService } from '../leads.service';
import { Leads } from 'src/app/interfaces/leads';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-potentialduplicates',
  templateUrl: './potentialduplicates.component.html',
  styleUrls: ['./potentialduplicates.component.scss']
})
export class PotentialduplicatesComponent implements OnInit {
  leads:Leads[]=[]
  lead_id:string
  potentialduplicates:Leads[]=[]
  constructor(public route:ActivatedRoute,public LeadsService:LeadsService) {
    //getLeads
    this.LeadsService.$LEADS.subscribe((res:Leads[])=>{
      this.leads=res
    })
    //get id
    this.lead_id=this.route.snapshot.paramMap.get('id')??''
    //getpotentialduplicates and make array
    this.getpotentialduplicates()
      }

  ngOnInit(): void {}
  async getpotentialduplicates(){
    await this.LeadsService.getpotentialduplicates(this.lead_id).subscribe((res:[])=>{
      res.forEach((element:string) => {
        let data:Leads[]= this.leads.filter(lead=>{return lead.lead_id===element})
        this.potentialduplicates.push(data[0])
      });
     })
  }

  leadChange(e:any,ele:{duplicate_of:string,lead_id:string}){
    if(e.target.checked){
      ele.duplicate_of=this.lead_id
      this.LeadsService.putpotentialduplicates(ele.lead_id,ele).subscribe(res=>{
        Swal.fire('Thank you...', 'You Update succesfully!', 'success')
      })
    }

    else{
      ele.duplicate_of=''
      this.LeadsService.putpotentialduplicates(ele.lead_id,ele).subscribe(res=>{
        Swal.fire('Thank you...', 'You Update succesfully!', 'success')
      })
    }
  }

}
