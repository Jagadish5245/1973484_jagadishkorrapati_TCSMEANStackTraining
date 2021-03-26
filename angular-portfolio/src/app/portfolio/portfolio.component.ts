import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { contactDetails } from '../contact.details';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']

})
export class PortfolioComponent implements OnInit {
  
  loginRef= new FormGroup({
    fname:new FormControl(),
    number:new FormControl()
  });
 

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    let cname=this.loginRef.get("fname")?.value;
    let number1=this.loginRef.get("number")?.value;
    console.log(cname)
    console.log(number1)
    
  }
}
