import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  storeEmployee(emp:any){
    this.http.post("http://localhost:3000/employees",emp).subscribe(result=>console.log(result),error=>console.log(error))
  }

}
