import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  
  loadEmployeeDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>("/assets/employee.json");

  }


}


