import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { contactDetails } from '../contact.details';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']

})
export class PortfolioComponent implements OnInit {
  cname : string ='';
  number1 : string='';
  
  loginR= new FormGroup({
    fname:new FormControl(),
    number:new FormControl()
  });
 

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.cname=this.loginR.get("fname")?.value;
    this.number1=this.loginR.get("number")?.value;
   // data : new contactDetails(cname,number1);
   // console.log(this.cname)
    //console.log(this.number1)
    
  }
}
