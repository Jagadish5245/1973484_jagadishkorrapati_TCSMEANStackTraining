import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { task } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public http:HttpClient) { }
  
  stTasks(tasks:any){
     this.http.post("http://localhost:3000/tasks",tasks).subscribe(result=>console.log(result),error=>console.log(error));
     // return this.http.get<task[]>("http://localhost:3000/tasks")
  }
 callTasks(tasks:any):Observable<task[]> {
    return this.http.get<task[]>("http://localhost:3000/tasks");
  }
}
